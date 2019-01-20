import { User } from '@app/pg/models';

import { BaseRepository } from './base.repository';

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super(User);
  }

  public async findByUsernameOrEmail(usernameOrEmail: string) {
    return await this.repository.findOne({
      where: [{ username: usernameOrEmail } as User, { email: usernameOrEmail } as User],
    });
  }
}
