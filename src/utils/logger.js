import env from '../config';

const { transports, format, createLogger } = require('winston');

const {
  combine, label, timestamp, printf, colorize,
} = format;

const myFormat = printf(
  info => `${info.timestamp} [${info.level}]: ${info.label} - ${info.message}`,
);

const options = {
  error: {
    filename: `${env.logDirectory}/error.log`,
    level: 'error',
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  combined: {
    filename: `${env.logDirectory}/combined.log`,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    handleExceptions: true,
    json: false,
    colorize: true,
    format: combine(colorize(), label({ label: 'EMERE-GraphQL' }), timestamp(), myFormat),
  },
};

const logger = createLogger({
  level: 'info',
  format: format.json(),
  transports: [
    new transports.File(options.error),
    new transports.File(options.combined),
    new transports.Console(options.console),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

module.exports = logger;

module.exports.stream = {
  write(message) {
    logger.info(message);
  },
};
