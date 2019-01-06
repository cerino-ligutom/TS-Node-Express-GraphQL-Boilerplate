import { Express } from 'express';
import { ApolloServer, GraphQLExtension } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { schema } from './schema';

export const initApolloGraphqlServer = (app: Express) => {
  const server = new ApolloServer({
    schema,
    context: ({ req }: { req: any }) => {
      const { user } = req;

      return {
        user,
      };
    },
    validationRules: [depthLimit(10)],
  });

  server.applyMiddleware({
    app,
  });
};
