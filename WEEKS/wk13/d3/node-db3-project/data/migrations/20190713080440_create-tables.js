// DO NOT CHANGE THIS FILE
exports.up = function (knex) {
  return knex.schema
    .createTable('schemes', tbl => {
      tbl.increments('scheme_id');
      tbl.text('scheme_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('steps', tbl => {
      tbl.increments('step_id');
      tbl.integer('step_number')
        .unsigned()
        .notNullable();
      tbl.text('instructions')
        .notNullable();
      tbl.integer('scheme_id')
        .unsigned()
        .notNullable()
        .references('scheme_id')
        .inTable('schemes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('schemes');
};
