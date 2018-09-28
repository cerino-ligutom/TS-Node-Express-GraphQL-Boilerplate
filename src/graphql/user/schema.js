import { gql } from 'apollo-server-express';
import Base from '../base';

const User = gql`
  extend type Query {
    GetAllUsers: [User]
    User(id: ID!): User
  }

  extend type Mutation {
    CreateUser(input: CreateUserInput!): User
  }

  type User {
    id: ID!
    username: String
    hash: String
    firstName: String
    middleName: String
    lastName: String
    fullName: String
    email: String
    image: String
    createdAt: Date
  }

  input CreateUserInput {
    username: String!
    hash: String!
    firstName: String
    middleName: String
    lastName: String
    fullName: String
    email: String
    image: String
  }
`;

// We make sure to include all dependencies of this schema.
// In this case, Base where it includes scalar Date type
// as well as extending the type Query.
// makeExecutableSchema from graphql-tools will deeplink this.
// We also use a function to avoid circular dependency.
export default () => [User, Base];
