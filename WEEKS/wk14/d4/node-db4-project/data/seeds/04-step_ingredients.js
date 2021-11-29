
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('step_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('step_ingredients').insert([
        {step_id: 1, ingredient_id: 1, quantity: 2},
        {step_id: 2, ingredient_id: 1, quantity: 2},
        {step_id: 3, ingredient_id: 1, quantity: 2},
        {step_id: 4, ingredient_id: 1, quantity: 2},
        {step_id: 5, ingredient_id: 1, quantity: 2},
        {step_id: 6, ingredient_id: 1, quantity: 2},
        {step_id: 7, ingredient_id: 1, quantity: 2},
        {step_id: 8, ingredient_id: 1, quantity: 2},
      ]);
    });
};
