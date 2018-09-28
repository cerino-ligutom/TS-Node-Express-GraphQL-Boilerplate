import { ApolloServer } from 'apollo-server-express';

import schema from './schema';
import InMemoryConnector from '../connectors/in-memory';

export default (app) => {
  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({
      user: req.user,
      InMemoryConnector,
    }),
    playground: {
      settings: {
        'editor.theme': 'dark',
      },
    },
  });

  server.applyMiddleware({ app });
};
