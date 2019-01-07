import { SchemaDirectiveVisitor, AuthenticationError } from 'apollo-server-express';
import { defaultFieldResolver, GraphQLField } from 'graphql';
import { IGraphQLContext } from '@EMERE/utils';

export class RequireAuthDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field: GraphQLField<any, any>) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async (parent, args: any, context: IGraphQLContext, info) => {
      if (context.user) {
        const result = await resolve.apply(this, args);
        return result;
      } else {
        throw new AuthenticationError('Not authenticated. Login required.');
      }
    };
  }
}
