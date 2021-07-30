const db = require('../../data/db-config');

const getAll = async () => {
  return await db('accounts');
};

const getById = async id => {
  return await db('accounts').where({id}).first();
};

const create = async account => {
  const newId = await db('accounts').insert(account);
  return await getById(newId);
};

const updateById = async (id, account) => {
  // UPDATE accounts SET name = newName, budget = newBudget WHERE id = argId;
  await db('accounts')
    .where({id})
    .update(account);
  return await getById(id); // cant use req.account here to make less db calls;
};

const deleteById = async id => {
  // DELETE FROM accounts WHERE id = argID;
  const deleted = await getById(id);
  await db('accounts')
    .where({id})
    .del();
  return deleted;
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
