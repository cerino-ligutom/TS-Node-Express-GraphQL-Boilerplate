import { IGraphQLContext } from '@EMERE/utils';
import { UserEntity } from '@EMERE/pg/models';
import _ from 'lodash';
import { passwordService } from '@EMERE/utils';
import { CreateUserMutationResponse, CreateUserMutationArgs } from 'typings/emere-graphql';

export default {
  createUser: async (parent: any, { input }: CreateUserMutationArgs, context: IGraphQLContext): Promise<CreateUserMutationResponse> => {
    const user = new UserEntity();
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

    const createdUser = await context.UserRepository.save(user);

    return {
      data: createdUser,
      success: true,
      message: 'User successfully created.',
    };
  },
};
