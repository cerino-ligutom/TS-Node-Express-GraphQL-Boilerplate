require('dotenv').config();

export const environment = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
};

export default environment;
