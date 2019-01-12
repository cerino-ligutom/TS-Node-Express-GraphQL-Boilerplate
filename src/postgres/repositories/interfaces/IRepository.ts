import { FindManyOptions, FindOneOptions } from 'typeorm';

export interface IRepository<T> {
  findById(id: number): Promise<T | undefined>;
  findByIds(ids: number[]): Promise<T[]>;
  save(data: DeepPartial<T>): Promise<T | undefined>;
  remove(data: T): Promise<T>;
  find(options: FindManyOptions<T>): Promise<T[]>;
  findOne(options: FindOneOptions<T>): Promise<T | undefined>;
}
