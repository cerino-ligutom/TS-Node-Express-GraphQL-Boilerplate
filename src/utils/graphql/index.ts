import { fileLoader } from 'merge-graphql-schemas';

export * from './interfaces';

export const getTypeDefs = () => {
  return fileLoader('src/graphql/**/*.graphql');
};
