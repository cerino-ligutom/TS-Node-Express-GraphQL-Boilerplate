import path from 'path';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'apollo-server-express';
import { scalars } from './custom-scalars';
import { schemaDirectives } from './directives';

// Queries
let queries = fileLoader(path.join(__dirname, '**/queries/*.ts'));
queries = queries.map((query) => ({ Query: query }));

// Mutations
let mutations = fileLoader(path.join(__dirname, '**/mutations/*.ts'));
mutations = mutations.map((mutation) => ({ Mutation: mutation }));

// Schema Types
const types = fileLoader(path.join(__dirname, '**/*.graphql'));

// Create Schema
let resolvers = mergeResolvers([...queries, ...mutations]);
resolvers = { ...resolvers, ...scalars }; // Don't forget the scalars
const typeDefs = mergeTypes(types);

export const schema = makeExecutableSchema({
  schemaDirectives,
  typeDefs,
  resolvers,
  logger: { log: (e) => console.info(e) },
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});
