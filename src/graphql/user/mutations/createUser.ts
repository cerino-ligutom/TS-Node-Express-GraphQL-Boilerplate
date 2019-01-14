import { IGraphQLContext } from '@EMERE/utils';
import { User } from '@EMERE/pg/models';
import _ from 'lodash';
import { PasswordService } from '@EMERE/utils';
import { MutationResolvers, ICreateUserMutationResponse } from 'typings/app-graphql-schema';

const createUser: MutationResolvers.CreateUserResolver = async (
  root,
  { input },
  ctx,
): Promise<ICreateUserMutationResponse> => {
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

  const createdUser = await ctx.pg.UserRepository.save(user);

  return {
    data: createdUser,
    success: true,
    message: 'User successfully created.',
  };
};

export default { createUser };
