const db = require('../../data/db-config')

async function find() { // EXERCISE A
  /*
      SELECT
          sc.*,
          count(st.step_id) as number_of_steps
      FROM schemes as sc
      LEFT JOIN steps as st
          ON sc.scheme_id = st.scheme_id
      GROUP BY sc.scheme_id
      ORDER BY sc.scheme_id ASC;
.
  */
  let returnThis = await db('schemes as sc')
    .leftJoin('steps as st', 'sc.scheme_id', 'st.scheme_id')
    .groupBy('sc.scheme_id')
    .orderBy('sc.scheme_id')
    .count('st.step_id', {as: 'number_of_steps'})
    .select('sc.*');
  let steps = await db('steps');
  for (let i=0; i < returnThis.length; i++) {
    const checkFor = returnThis[i].scheme_id;    
    returnThis[i].steps=[];

    steps.forEach((item) => {
      if (item.scheme_id === checkFor) {
        returnThis[i].steps.push(item);
      }
    })
  }
  
  return returnThis;
}

async function findById(scheme_id) {
  if (typeof(scheme_id) !== "number") {
    scheme_id = parseInt(scheme_id);
  }
  let returnScheme = await db('schemes')
    .where({ scheme_id })
    .first();
    
  returnScheme.steps = await findSteps(scheme_id);

  return returnScheme;
}

async function findSteps(scheme_id) { // EXERCISE C
  return await db('steps')
      .where( { scheme_id })
      .orderBy('step_number', 'asc');
}

async function add(scheme) { 
  let id = await db('schemes')
    .insert(scheme);

  return findById(id);
}

async function addStep(scheme_id, step) { 
  step.scheme_id = scheme_id;

  await db('steps')
    .insert(step);
    
  return findSteps(scheme_id);
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
}
