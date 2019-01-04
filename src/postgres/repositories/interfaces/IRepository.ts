import { DeepPartial } from 'typeorm';

export interface IRepository<T> {
  findById(id: number): Promise<T | undefined>;
  findByIds(ids: number[]): Promise<T[] | undefined>;
  save(data: DeepPartial<T>): Promise<T | undefined>;
}
