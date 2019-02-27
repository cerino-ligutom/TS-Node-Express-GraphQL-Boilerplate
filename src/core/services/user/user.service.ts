import { repositories } from '@app/pg/repositories';
import { User } from '@app/pg/models';
import { ICreateUserInput } from '@app/graphql-generated-schema';
import { PasswordService } from '@app/utils';
import _ from 'lodash';

const { userRepository } = repositories;

export class UserService {
  public async createUser(input: ICreateUserInput): Promise<User> {
    const user = new User();
    user.username = input.username;
    user.email = input.email;
    user.firstName = input.firstName;
    user.middleName = input.middleName;
    user.lastName = input.lastName;
    user.description = input.description;

    const salt = await PasswordService.generateSalt();
    const hash = await PasswordService.generateHash(input.password, salt);

    user.passwordSalt = salt;
    user.passwordHash = hash;

    const createdUser = await userRepository.save(user);

    return createdUser;
  }

  public async updateUser(input: User): Promise<User | null> {
    let user = await this.findById(input.id);

    if (user) {
      user = _.merge(user, input);
      user = await userRepository.save(user);
    }

    return user;
  }

  public async findById(id: string): Promise<User | null> {
    // this.checkCanSee();
    return userRepository.findById(id) || null;
  }

  public async deleteUser(id: string): Promise<User | null> {
    const user = await this.findById(id);

    if (user) {
      await userRepository.remove(user);
    }

    return user;
  }

  private checkCanSee() {
    // https://youtu.be/etax3aEe2dA?t=790
    // Implementation of visibility varies from service to service based on business logic
    return;
  }
}

export const userService = new UserService();
