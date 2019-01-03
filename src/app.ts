import compression from 'compression';
import cors from 'cors';
import express from 'express';

import { env } from '@EMERE/config/environment';
import initRoutes from './routes';

const app = express();

const startApp = async () => {
  app.use(cors());
  app.use(express.json());
  app.use(compression());

  app.use('/api', initRoutes());

  app.listen(env.PORT, () => {
    console.info(`EMERE Server is now up @ ${env.HOST}:${env.PORT}`);
  });
};
startApp();
