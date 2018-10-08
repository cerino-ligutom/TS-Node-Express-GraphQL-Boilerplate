require('dotenv').config();

const appRoot = require('app-root-path');

const NODE_ENV = process.env.NODE_ENV || 'development';

const environment = {
  development: {
    NODE_ENV: 'development',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    logDirectory: `${appRoot}/logs`,
  },

  staging: {
    NODE_ENV: 'staging',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    logDirectory: `${appRoot}/logs`,
  },

  production: {
    NODE_ENV: 'production',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    logDirectory: `${appRoot}/logs`,
  },
};

export default environment[NODE_ENV];
