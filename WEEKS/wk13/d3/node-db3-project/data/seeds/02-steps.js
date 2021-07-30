// DO NOT CHANGE THIS FILE
const steps = [
  { scheme_id: 1, step_number: 2, instructions: 'crack cyber security' },
  { scheme_id: 1, step_number: 1, instructions: 'solve prime number theory' },
  { scheme_id: 1, step_number: 3, instructions: 'blackmail world leaders' },
  { scheme_id: 2, step_number: 2, instructions: 'profit' },
  { scheme_id: 2, step_number: 1, instructions: 'collect all the sheep in Scotland' },
  { scheme_id: 3, step_number: 3, instructions: 'smash box with a hammer (evil laugh)' },
  { scheme_id: 3, step_number: 2, instructions: 'put the flea in a box' },
  { scheme_id: 3, step_number: 1, instructions: 'turn your enemy into a flea' },
  { scheme_id: 4, step_number: 1, instructions: 'write a bot to randomly like posts and follow pages' },
  { scheme_id: 4, step_number: 3, instructions: 'try to ignore the persistent feeling of loneliness' },
  { scheme_id: 4, step_number: 2, instructions: 'watch instagram followers increase' },
  { scheme_id: 5, step_number: 1, instructions: 'quest and quest some more' },
  { scheme_id: 6, step_number: 4, instructions: 'seamlessly take their place' },
  { scheme_id: 6, step_number: 3, instructions: 'artfully craft accessories' },
  { scheme_id: 6, step_number: 1, instructions: 'steal coworker\'s name tag' },
  { scheme_id: 6, step_number: 2, instructions: 'procure facial hair' },
]

exports.steps = steps

exports.seed = function (knex) {
  return knex('steps').insert(steps)
}
