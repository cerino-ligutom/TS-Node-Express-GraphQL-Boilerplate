import { IRepository } from '@app/pg/repositories';
import DataLoader from 'dataloader';
import _ from 'lodash';

export const createIdDataLoader = <T>(repository: IRepository<T>) => {
  return new DataLoader(async (ids: string[]) => {
    const rows = await repository.findByIds(ids);

    // @ts-ignore -- row.id is assumed to always present when using this utility function
    return ids.map((id) => _.find(rows, (row) => row.id === id) || null);
  });
};
