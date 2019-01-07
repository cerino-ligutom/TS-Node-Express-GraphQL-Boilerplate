import { User } from '@EMERE/pg/models';

import { BaseRepository } from './base.repository';
import { IUserRepository } from './interfaces';

class UserRepository extends BaseRepository<User>
  implements IUserRepository {
  constructor() {
    super(User);
  }
}

export const userRepository = new UserRepository();
