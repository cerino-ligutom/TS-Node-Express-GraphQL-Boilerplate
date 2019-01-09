import { SchemaDirectiveVisitor, AuthenticationError } from 'apollo-server-express';
import { defaultFieldResolver, GraphQLField, GraphQLResolveInfo, GraphQLObjectType } from 'graphql';
import { IGraphQLContext } from '@EMERE/utils';

interface IRequireAuthDirectiveObjectType extends GraphQLObjectType {
  _authFieldsWrapped: boolean;
  _requiredAuthRoles: string[];
}

interface IRequireAuthDirectiveField extends GraphQLField<any, any> {
  _requiredAuthRoles: string[];
}

// https://blog.apollographql.com/reusable-graphql-schema-directives-131fb3a177d1
export class RequireAuthDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, any>, details: any) {}


  // public visitObject(type: GraphQLObjectType) {}

  private ensureFieldsWrapped(objectType: IRequireAuthDirectiveObjectType) {
    // Mark the GraphQLObjectType object to avoid re-wrapping:
    if (objectType._authFieldsWrapped) {
      return;
    }
    objectType._authFieldsWrapped = true;

    const fields = objectType.getFields();

    Object.keys(fields).forEach((fieldName) => {
      const field = fields[fieldName] as IRequireAuthDirectiveField;
      const { resolve = defaultFieldResolver } = field;

      field.resolve = async function(...args) {
        const [, , context, info]: [any, { [key: string]: any }, IGraphQLContext, GraphQLResolveInfo] = args;

        // Get the required Role from the field first, falling back
        // to the objectType if no Role is required by the field:
        const requiredRole = field._requiredAuthRoles || objectType._requiredAuthRoles;

        if (!requiredRole) {
          return resolve.apply(this, args);
        }

        const { user } = context;

        // const context = args[2];
        // const user = await getUser(context.headers.authToken);
        // if (!user.hasRole(requiredRole)) {
        //   throw new Error('not authorized');
        // }

        return resolve.apply(this, args);
      };
    });
  }
}
