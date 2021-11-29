
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, step_instructions: "Place your skillet on the stovetop and turn on the heat", recipe_id: 1},
        {step_number: 2, step_instructions: "Pprepare your eggs. Break them into a bowl with a tablespoon of water or milk, some salt and pepper. I use about 1/8 tsp salt and a pinch of pepper; you might use more or less according to taste", recipe_id: 1},
        {step_number: 3, step_instructions: "Lightly grease your hot skillet, coating the surface with a thin layer of oil or butter", recipe_id: 1},
        {step_number: 4, step_instructions: "Pour the eggs into the skillet", recipe_id: 1},
        {step_number: 5, step_instructions: "Place your skillet on the stovetop and turn on the heat", recipe_id: 1},
        {step_number: 6, step_instructions: "Move the spatula around the edge of the skillet, pulling the cooked edges towards the center and re-flooding repeatedly", recipe_id: 1},
        {step_number: 7, step_instructions: "At a certain point, the uncooked eggs will no longer flood and the scramble will all collect in the center of the skillet, but it will still be slightly runny in texture. Begin breaking up the scramble; quickly turn undercooked areas and keep the scramble moving to make sure that all surfaces cook evenly. Never leave a surface in contact too long with the skillet or it will become overcooked.", recipe_id: 1},
        {step_number: 8, step_instructions: "Turn off the heat when the eggs are 90% cooked. When the eggs are done, serve immediately. Perfectly cooked scrambled eggs are moist but not runny, with no crisp or brown edges. This technique may take a bit of practice, but it is quite simple. With time you too will be making and serving moist, fluffy scrambled eggs", recipe_id: 1},
      ]);
    });
};
