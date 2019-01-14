import { Express, Request } from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { schema } from './schema';
import { IGraphQLContext } from '@EMERE/utils';
import { UserRepository } from '@EMERE/pg/repositories';
import { GraphQLRouter } from 'src/routes/graphql.routes';
import { initLoaders } from '../graphql-dataloaders';

export const initApolloGraphqlServer = (app: Express) => {
  const server = new ApolloServer({
    schema,
    context: ({ req }: { req: Request }) => {
      const { user } = req;

      const graphqlContext: IGraphQLContext = {
        user,
        // postgres
        pg: {
          UserRepository: new UserRepository(),
        },
        loaders: initLoaders(),
      };

      return graphqlContext;
    },
    validationRules: [depthLimit(10)],
    introspection: true,
  });

  app.use(GraphQLRouter);
  server.applyMiddleware({
    app,
  });
};
