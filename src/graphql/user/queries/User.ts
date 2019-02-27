import { QueryResolvers } from '@app/graphql-generated-schema';

const user: QueryResolvers.UserResolver = async (obj, { id }, ctx) => {
  return await ctx.loaders.userById.load(id);
};

export default {
  user,
};
