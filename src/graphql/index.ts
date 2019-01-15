import { Express, Request } from 'express';
import { ApolloServer, ApolloError } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { schema } from './schema';
import { IGraphQLContext, logger } from '@app/utils';
import { GraphQLRouter } from 'src/routes/graphql.routes';
import { initLoaders } from '../graphql-dataloaders';
import { env } from '@app/config/environment';
import { services } from '@app/core/services';

export const initApolloGraphqlServer = (app: Express) => {
  const server = new ApolloServer({
    schema,
    context: ({ req }: { req: Request }) => {
      const { user } = req;

      const graphqlContext: IGraphQLContext = {
        user,
        services,
        loaders: initLoaders(),
      };

      return graphqlContext;
    },
    validationRules: [depthLimit(10)],
    formatError: (err: ApolloError) => {
      // https://www.apollographql.com/docs/apollo-server/features/errors.html#Masking-and-logging-errors

      // We want to log all errors
      logger.error(err);

      // But not send the exception details to the client when in production
      if (env.isProduction) {
        err.extensions!.exception = null;
      }

      return err;
    },
  });

  app.use(GraphQLRouter);
  server.applyMiddleware({
    app,
  });
};
