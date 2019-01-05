import { User } from '@EMERE/pg/models';
import { IRepository } from './IRepository';

export interface IUserRepository extends IRepository<User> {}
