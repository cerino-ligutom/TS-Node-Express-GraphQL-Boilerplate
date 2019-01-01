import { env } from '@EMERE/config/environment';
import express from 'express';
import initRoutes from './routes';

const app = express();

const startApp = async () => {
  app.use('/api', initRoutes());

  app.listen(env.PORT, () => {
    console.info(`EMERE Server is now up @ ${env.HOST}:${env.PORT}`);
  });
};
startApp();
