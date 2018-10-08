exports.seed = (knex) => {
  const users = [
    {
      firstName: 'Superadmin',
      lastName: 'E-Mere',
    },
    {
      firstName: 'Admin',
      lastName: 'E-Mere',
    },
  ];

  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => knex('users').insert(users));
};
