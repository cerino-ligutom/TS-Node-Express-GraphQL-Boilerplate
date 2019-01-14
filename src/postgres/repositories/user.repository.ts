import { User } from '@app/pg/models';

import { BaseRepository } from './base.repository';

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super(User);
  }
}
