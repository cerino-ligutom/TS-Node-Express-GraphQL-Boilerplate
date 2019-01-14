import { Express } from 'express';
import winston from 'winston';
import expressWinston from 'express-winston';
import fs from 'fs';
import { WinstonService } from '@app/utils';

if (!fs.existsSync(WinstonService.config.LOGS_FOLDER_PATH)) {
  fs.mkdirSync(WinstonService.config.LOGS_FOLDER_PATH);
}

export const initWinstonRequestLogger = (app: Express) => {
  expressWinston.bodyBlacklist = ['usernameOrEmail', 'password'];

  const options: expressWinston.LoggerOptions = {
    transports: [
      new winston.transports.File({
        dirname: 'logs',
        filename: 'access.log',
        maxFiles: WinstonService.config.MAX_FILES,
        maxsize: WinstonService.config.MAX_FILE_SIZE,
      }),
    ],
    meta: true,
    expressFormat: true,
    colorize: true,
  };

  app.use(expressWinston.logger(options));
};

export const initWinstonAppLogger = (app: Express) => {
  const { consoleLogs, combinedLogs, errorLogs } = WinstonService.fileTransports;

  const options: expressWinston.ErrorLoggerOptions = {
    transports: [consoleLogs, combinedLogs, errorLogs],
  };

  app.use(expressWinston.errorLogger(options));
};
