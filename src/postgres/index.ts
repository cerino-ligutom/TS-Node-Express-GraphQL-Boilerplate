import 'reflect-metadata'; // Required by TypeORM
import { createConnection, getConnectionOptions } from 'typeorm';
import { env } from '@app/config/environment';

export const initDbConnection = async () => {
  const connectionOpts = await getConnectionOptions(env.PG_TYPEORM_CONNECTION_NAME);

  return createConnection(connectionOpts)
    .then(async (connection) => {
      console.info(`[TypeORM DB] Connection name: ${connection.name} | isConnected: ${connection.isConnected}`);
      return connection.isConnected;
    })
    .catch((err) => {
      console.error(err);
    });
};
