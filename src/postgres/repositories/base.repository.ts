import { IRepository } from './interfaces';
import { DeepPartial, getConnection } from 'typeorm';

export abstract class BaseRepository<T> implements IRepository<T> {
  constructor(private entity: new () => T) {}

  protected get repository() {
    return getConnection().getRepository(this.entity);
  }

  public findById(id: number): Promise<T | undefined> {
    return this.repository.findOne(id);
  }

  public findByIds(ids: number[]): Promise<T[] | undefined> {
    return this.repository.findByIds(ids);
  }

  public save(data: DeepPartial<T>): Promise<T | undefined> {
    return this.repository.save(data);
  }
}
