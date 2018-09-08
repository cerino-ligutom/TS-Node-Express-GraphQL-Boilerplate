import express from 'express';
import cors from 'cors';
import env from './config';

const app = express();

app.use(cors());
app.use(express.json());

const startApp = async () => {
  app.listen(env.port, () => {
    console.log(`Server is now up @ port ${env.host}:${env.port}`);
  });
};
startApp();
