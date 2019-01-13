import compression from 'compression';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import HttpStatus from 'http-status-codes';

import { env } from '@EMERE/config/environment';
import { logger } from '@EMERE/utils';

import passport from 'passport';
import './passport';

import { initDbConnection } from './postgres';
import { ServerRouter } from './routes';
import { initApolloGraphqlServer } from './graphql';
import { initWinstonAppLogger, initWinstonRequestLogger } from './middleware';

const app = express();

const startApp = async () => {
  await initDbConnection();

  app.use(cors());
  app.use(express.json());
  app.use(compression());
  app.use(passport.initialize());

  // Initialize HTTP requests logger before routes
  initWinstonRequestLogger(app);

  // Setup routes
  app.use('/api', ServerRouter);

  // GraphQL
  initApolloGraphqlServer(app);

  // Initialize app level logger after all middlewares
  initWinstonAppLogger(app);

  // Basic error middleware
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    // Log error message in our server's console
    console.error(err.message);

    // Log error in our logger
    logger.error(err.message);
    logger.error(`${err.stack}`);

    // All HTTP requests must have a response, so let's send back an error with its status code and message
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
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
