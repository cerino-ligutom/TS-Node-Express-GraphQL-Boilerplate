import { DeepPartial, getConnection, FindManyOptions, FindOneOptions } from 'typeorm';
import { IRepository } from './interfaces';
import { env } from '@app/config/environment';

export class BaseRepository<T> implements IRepository<T> {
  constructor(protected entity: new () => T) {}

  protected get repository() {
    return getConnection(env.PG_TYPEORM_CONNECTION_NAME).getRepository(this.entity);
  }

  public async findById(id: string): Promise<T | null> {
    if (!id) {
      throw new Error('No id provided.');
    }

    const entity = await this.repository.findOne(id);

    return !!entity ? entity : null;
  }

  public async findByIds(ids: string[]): Promise<T[]> {
    if (!ids || !ids.length) {
      throw new Error('No ids provided.');
    }

    return await this.repository.findByIds(ids);
  }

  public async save(data: DeepPartial<T>): Promise<T> {
    return await this.repository.save(data);
  }

  public async remove(data: T): Promise<T> {
    return await this.repository.remove(data);
  }

  public async find(options: FindManyOptions<T>): Promise<T[]> {
    return await this.repository.find(options);
  }

  public async findOne(options: FindOneOptions<T>): Promise<T | null> {
    const entity = await this.repository.findOne(options);

    return !!entity ? entity : null;
  }
}
