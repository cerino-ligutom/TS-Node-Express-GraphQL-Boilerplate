import { UserEntity } from '@EMERE/pg/models';

import { BaseRepository } from './base.repository';

export class UserRepository extends BaseRepository<UserEntity> {
  constructor() {
    super(UserEntity);
  }
}
