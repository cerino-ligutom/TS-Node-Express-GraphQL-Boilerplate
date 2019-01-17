import { QueryResolvers } from 'typings/app-graphql-schema';

const user: QueryResolvers.UserResolver = async (obj, { id }, ctx) => {
  return await ctx.loaders.userById.load(id);
};

export default {
  user,
};
