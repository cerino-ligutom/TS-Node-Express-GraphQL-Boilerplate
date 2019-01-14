import path from 'path';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'apollo-server-express';
import { scalars } from './custom-scalars';
import { applyMiddleware } from 'graphql-middleware';
import { schemaPermissions } from '../graphql-shield';

const getTypeDefs = () => {
  return fileLoader(path.join(__dirname, '**/*.graphql'));
};

const getQueries = () => {
  const loadedQueries = fileLoader(path.join(__dirname, '**/queries/*.ts'));
  return loadedQueries.map((query) => ({ Query: query }));
};

const getMutations = () => {
  const loadedMutations = fileLoader(path.join(__dirname, '**/mutations/*.ts'));
  return loadedMutations.map((mutation) => ({ Mutation: mutation }));
};

// Create Schema
const queries = getQueries();
const mutations = getMutations();

let resolvers = mergeResolvers([...queries, ...mutations]);
resolvers = { ...resolvers, ...scalars }; // Don't forget the scalars
const typeDefs = mergeTypes(getTypeDefs());

let graphqlSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
  logger: { log: (e) => console.info(e) },
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});

// Apply graphql-shield middleware
graphqlSchema = applyMiddleware(graphqlSchema, schemaPermissions);

export const schema = graphqlSchema;
