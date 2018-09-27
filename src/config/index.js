require('dotenv').config();

const appRoot = require('app-root-path');

export const environment = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
  logDirectory: `${appRoot}/logs`,
};

export default environment;
