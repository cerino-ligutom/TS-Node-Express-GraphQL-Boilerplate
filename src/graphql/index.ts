import { Express } from 'express';
import { ApolloServer, GraphQLExtension } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { schema } from './schema';
import { IGraphQLContext } from '@EMERE/utils';
import { UserRepository } from '@EMERE/pg/repositories';
import { GraphQLRouter } from 'src/routes/graphql.routes';

export const initApolloGraphqlServer = (app: Express) => {
  const server = new ApolloServer({
    schema,
    context: (ctxArgs: any) => {
      const { user } = ctxArgs.req;

      const graphqlContext: IGraphQLContext = {
        user,
        UserRepository: new UserRepository(),
      };

      return graphqlContext;
    },
    validationRules: [depthLimit(10)],
  });

  app.use(GraphQLRouter);
  server.applyMiddleware({
    app,
  });
};
