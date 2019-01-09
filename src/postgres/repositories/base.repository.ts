import { DeepPartial, getConnection, FindManyOptions, FindConditions, FindOneOptions } from 'typeorm';

export class BaseRepository<T> {
  constructor(protected entity: new () => T) {}

  protected get repository() {
    return getConnection().getRepository(this.entity);
  }

  public async findById(id: number): Promise<T | undefined> {
    if (!id) {
      throw new Error('No id provided.');
    }

    return await this.repository.findOne(id);
  }

  public async findByIds(ids: number[]): Promise<T[] | undefined> {
    if (!ids || !ids.length) {
      throw new Error('No ids provided.');
    }

    return await this.repository.findByIds(ids);
  }

  public async save(data: DeepPartial<T>): Promise<T | undefined> {
    return await this.repository.save(data);
  }

  public async remove(data: T): Promise<T> {
    return await this.repository.remove(data);
  }

  public async find(options: FindManyOptions<T>): Promise<T[]> {
    return await this.repository.find(options);
  }

  public async findOne(options: FindOneOptions<T>): Promise<T | undefined> {
    return await this.repository.findOne(options);
  }
}
