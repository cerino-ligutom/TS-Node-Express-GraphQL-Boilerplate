import compression from 'compression';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';

import { env } from '@EMERE/config/environment';
import { initDbConnection } from './postgres';
import { ServerRouter } from './routes';
import { initApolloGraphqlServer } from './graphql';
import passport from 'passport';
import './passport';

const app = express();

const startApp = async () => {
  await initDbConnection();

  app.use(cors());
  app.use(express.json());
  app.use(compression());
  app.use(passport.initialize());

  app.use('/api', ServerRouter);
  initApolloGraphqlServer(app);

  // Basic error middleware
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    // Log error message in our server's console
    console.error(err.message);
    // If err has no specified error code, set error code to 'Internal Server Error (500)'
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    // All HTTP requests must have a response, so let's send back an error with its status code and message
    res.status(err.statusCode).send({
      errors: {
        message: err.message,
        data: env.isProduction ? {} : err,
      },
    });
  });

  app.listen(env.PORT, () => {
    console.info(`EMERE Server is now up @ ${env.HOST}:${env.PORT}`);
  });
};
startApp();
