// DO NOT CHANGE THIS FILE
exports.seed = async function (knex) {
  await knex('users').truncate()
  await knex('roles').truncate()
  await knex('roles').insert([
    { role_name: 'admin' },
    { role_name: 'student' },
    { role_name: 'instructor' },
  ])
  await knex('users').insert([
    {
      username: 'bob',
      password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', // password "1234"
      role_id: 1,
    },
    {
      username: 'sue',
      password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', // password "1234"
      role_id: 3,
    },
  ])
}
