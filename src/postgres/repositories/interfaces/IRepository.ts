import { FindManyOptions, FindOneOptions } from 'typeorm';

export interface IRepository<T> {
  findById(id: string): Promise<T | null>;
  findByIds(ids: string[]): Promise<T[]>;
  save(data: DeepPartial<T>): Promise<T>;
  remove(data: T): Promise<T>;
}
