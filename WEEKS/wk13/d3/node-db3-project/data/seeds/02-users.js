const users = [
  { name: 'Frodo Baggins' },
  { name: 'Samwise Gamgee' },
  { name: 'Meriadoc Brandybuck' },
  { name: 'Peregrin Took' },
  { name: 'Mithrandir' },
  { name: 'Boromir' },
  { name: 'Legolas' },
  { name: 'Gimli' },
  { name: 'Aragorn' },
];

exports.users = users;

exports.seed = function (knex) {
  return knex('users').insert(users);
};
