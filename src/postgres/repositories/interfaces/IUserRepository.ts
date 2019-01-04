import { User } from '@EMERE/pg/models';
import { IRepository } from '@EMERE/pg/repository-interfaces';

export interface IUserRepository extends IRepository<User> {}
