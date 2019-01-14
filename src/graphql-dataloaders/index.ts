import { userByIdLoader } from './userById';
import DataLoader from 'dataloader';
import { User } from '@app/pg/models';

export interface ILoaders {
  userById: DataLoader<number, User | null>;
}

export const initLoaders = () => {
  const loaders: ILoaders = {
    userById: userByIdLoader(),
  };

  return loaders;
};
