/* eslint-disable no-console */

import env from '../config';

const morgan = require('morgan');
const fs = require('fs');
const logger = require('../utils/logger');

function overrideConsoleLogging() {
  console.log = (...args) => logger.info.call(logger, ...args);
  console.info = (...args) => logger.info.call(logger, ...args);
  console.warn = (...args) => logger.warn.call(logger, ...args);
  console.error = (...args) => logger.error.call(logger, ...args);
  console.debug = (...args) => logger.debug.call(logger, ...args);
}

module.exports = (app) => {
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
      stream: logger.stream,
    }),
  );

  overrideConsoleLogging();
};
