import { userByIdLoader } from './userById';
import DataLoader from 'dataloader';
import { User } from '@EMERE/pg/models';

export interface ILoaders {
  userById: DataLoader<number, User>;
}

export const initLoaders = () => {
  const loaders: ILoaders = {
    userById: userByIdLoader(),
  };

  return loaders;
};
