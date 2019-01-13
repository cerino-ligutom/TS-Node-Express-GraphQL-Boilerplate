import winston from 'winston';
import moment from 'moment';

const winstonConfig = {
  LOGS_FOLDER_PATH: 'logs',
  MAX_FILES: 10,
  MAX_FILE_SIZE: 5242880, // value in bytes, current value: 5MB
};

const logFormat = winston.format.printf((info) => {
  const date = moment().format('h:mma | dddd | MMMM Do');
  return `\n[${date} - ${info.level}]:\n${JSON.stringify(info.message, undefined, 4)}\n`;
});
const logsConsoleTransport = new winston.transports.Console({
  format: winston.format.combine(winston.format.colorize(), logFormat),
});

const combinedLogsFileTransport = new winston.transports.File({
  dirname: 'logs',
  filename: 'combined.log',
  level: 'info',
  maxFiles: winstonConfig.MAX_FILES,
  maxsize: winstonConfig.MAX_FILE_SIZE,
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
});

const errorLogsFileTransport = new winston.transports.File({
  dirname: 'logs',
  filename: 'errors.log',
  level: 'error',
  maxFiles: winstonConfig.MAX_FILES,
  maxsize: winstonConfig.MAX_FILE_SIZE,
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
});

export const WinstonService = {
  config: winstonConfig,
  fileTransports: {
    consoleLogs: logsConsoleTransport,
    combinedLogs: combinedLogsFileTransport,
    errorLogs: errorLogsFileTransport,
  },
};

export const logger = winston.createLogger({
  transports: [logsConsoleTransport, combinedLogsFileTransport, errorLogsFileTransport],
});
