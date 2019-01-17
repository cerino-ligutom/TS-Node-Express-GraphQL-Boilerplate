import { UserResolvers } from 'typings/app-graphql-schema';

const fullName: UserResolvers.FullNameResolver = (parent) => {
  const names = [];

  if (parent.firstName && parent.firstName.trim().length) {
    names.push(parent.firstName);
  }

  if (parent.middleName && parent.middleName.trim().length) {
    names.push(`${parent.middleName.charAt(0)}.`);
  }

  if (parent.lastName && parent.lastName.trim().length) {
    names.push(parent.lastName);
  }

  return names.join(' ');
};

export default {
  User: {
    fullName,
  },
};
