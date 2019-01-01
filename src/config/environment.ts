require('dotenv').config();

const NODE_ENV = process.env.NODE_ENV || 'development';
const DEFAULT_PORT = 54321;
const DEFAULT_HOST = 'localhost';

interface IEnvironmentConfig {
  [key: string]: {
    HOST: string;
    NODE_ENV: string;
    PORT: number;
  };
}

const environment: IEnvironmentConfig = {
  development: {
    HOST: process.env.HOST || DEFAULT_HOST,
    NODE_ENV: 'development',
    // @ts-ignore
    PORT: +process.env.PORT || DEFAULT_PORT,
  },

  production: {
    HOST: process.env.HOST || DEFAULT_HOST,
    NODE_ENV: 'production',
    // @ts-ignore
    PORT: +process.env.PORT || DEFAULT_PORT,
  },

  staging: {
    HOST: process.env.HOST || DEFAULT_HOST,
    NODE_ENV: 'staging',
    // @ts-ignore
    PORT: +process.env.PORT || DEFAULT_PORT,
  },
};

export const env = environment[NODE_ENV];
