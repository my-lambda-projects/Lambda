
exports.up = function(knex) {
  return knex.schema.createTable("recipes", tbl => {
      tbl.increments("recipe_id")
      tbl.string("recipe_name", 128).notNullable()
  })
    .createTable("steps", tbl => {
        tbl.increments("step_id")
        tbl.integer("step_number")
        tbl.string("step_instructions")
        tbl.integer("recipe_id")
            .unsigned()
            .notNullable()
            .references("recipe_id")
            .inTable("recipes")
    })
    .createTable("ingredients", tbl => {
        tbl.increments("ingredient_id")
        tbl.string("ingredient_name")
    })
    .createTable("step_ingredients", tbl => {
        tbl.integer("step_id")
            .unsigned()
            .notNullable()
            .references("step_id")
            .inTable("steps")
        tbl.integer("ingredient_id")
            .unsigned()
            .notNullable()
            .references("ingredient_id")
            .inTable("ingredients")
        tbl.decimal("quantity")
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("step_ingredients")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("steps")
  .dropTableIfExists("recipes")
};
