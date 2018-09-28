/* eslint-disable no-console */

import cors from 'cors';
import express from 'express';
import env from '../config';

const compression = require('compression');
const morgan = require('morgan');
const fs = require('fs');
const logger = require('../utils/logger');

export default (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(compression());

  // Access logs
  const accessLogStream = fs.createWriteStream(`${env.logDirectory}/access.log`, { flags: 'a' });
  morgan.format(
    'custom',
    '[:date[clf]] ":method :url" :status :res[content-length] - :response-time ms',
  );
  app.use(morgan('custom', { stream: accessLogStream }));

  // Custom Logger
  app.use(
    morgan('combined', {
      skip: (req, res) => res.statusCode < 400,
      stream: logger.stream,
    }),
  );
};
