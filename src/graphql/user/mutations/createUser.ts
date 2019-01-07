import { IGraphQLContext } from '@EMERE/utils';
import { userRepository } from '@EMERE/pg/repositories';
import { User } from '@EMERE/pg/models';
import _ from 'lodash';
import { passwordService } from '@EMERE/utils';

export default {
  createUser: async (parent: any, { input }: { input: any }, context: IGraphQLContext) => {
    const user = new User();
    user.username = input.username;
    user.email = input.email;
    user.firstName = input.firstName;
    user.middleName = input.middleName;
    user.lastName = input.lastName;
    user.description = input.description;

    const salt = await passwordService.generateSalt();
    const hash = await passwordService.generateHash(input.password, salt);

    user.passwordSalt = salt;
    user.passwordHash = hash;

    const createdUser = await userRepository.save(user);

    return {
      data: createdUser,
      code: '200',
      success: true,
      message: 'User successfully created.',
    };
  },
};
