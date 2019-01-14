import { QueryResolvers, IUser } from 'typings/app-graphql-schema';

const User: QueryResolvers.UserResolver = async (obj, { id }, ctx) => {
  return await ctx.loaders.userById.load(id);
};

export default {
  User,
};
