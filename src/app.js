import express from 'express';
import env from './config';

const app = express();

require('./middleware')(app);

const startApp = async () => {
  // Endpoint to check if the API is running
  app.get('/api/status', (req, res) => {
    res.send({ status: 'ok' });
  });

  app.listen(env.port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is now up @ port ${env.host}:${env.port}`);
  });
};
startApp();
