import 'reflect-metadata'; // Required by TypeORM
import { createConnection } from 'typeorm';

export const initDbConnection = () => {
  return createConnection()
    .then(async (connection) => {
      console.info('Database Connection:', connection.isConnected);
      return connection.isConnected;
    })
    .catch((err) => {
      console.error(err);
    });
};
