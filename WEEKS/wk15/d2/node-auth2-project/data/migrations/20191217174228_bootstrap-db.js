exports.up = function (knex) {
  return knex.schema
    .createTable('roles', roles => {
      roles.increments('role_id')
      roles.string('role_name', 32).notNullable().unique()
    })
    .createTable('users', users => {
      users.increments('user_id')
      users.string('username', 128).notNullable().unique()
      users.string('password', 128).notNullable()
      users.integer('role_id')
        .unsigned()
        .notNullable()
        .references('role_id')
        .inTable('roles')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT')
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('roles')
}
