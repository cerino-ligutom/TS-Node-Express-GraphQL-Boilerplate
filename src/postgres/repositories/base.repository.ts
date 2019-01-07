import { DeepPartial, getConnection } from 'typeorm';

export class BaseRepository<T> {
  constructor(protected entity: new () => T) {}

  protected get repository() {
    return getConnection().getRepository(this.entity);
  }

  public async findById(id: number): Promise<T | undefined> {
    if (!id) {
      throw new Error('No id provided.');
    }

    return this.repository.findOne(id);
  }

  public async findByIds(ids: number[]): Promise<T[] | undefined> {
    if (!ids || !ids.length) {
      throw new Error('No ids provided.');
    }

    return this.repository.findByIds(ids);
  }

  public async save(data: DeepPartial<T>): Promise<T | undefined> {
    return this.repository.save(data);
  }

  public async remove(data: T): Promise<T> {
    return this.repository.remove(data);
  }
}
