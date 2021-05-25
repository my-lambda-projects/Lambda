const db = require('./userDb')
const { sendErr } = require('../middleware')

exports.getUsers = async ({ params: { id } }, res) => {
  const response = await db.get(id || '')
  response ? res.json(response) : sendErr(404, 'No user(s) found.', res)
}

exports.getUserPosts = async ({ params: { id } }, res) => {
  if (!id || isNaN(id)) return sendErr(400, 'Please provide a valid id.', res)
  const response = await db.getUserPosts(id)
  response
    ? res.json(response)
    : sendErr(404, `No user found by id ${id}.`, res)
}

exports.postUser = async ({ body: { name } }, res) => {
  if (!name) return sendErr(400, 'Please provide a valid name.', res)
  if (name.length > 128)
    return sendErr(400, 'Name must be less than 128 characters.', res)
  const response = await db.insert({ name })
  response
    ? res.redirect('/api/user')
    : sendErr(400, 'Unable to add user to the database.', res)
}

exports.updateUser = async ({ body: { name }, params: { id } }, res) => {
  if (!id || isNaN(id)) return sendErr(400, 'Please provide a valid id.', res)
  if (!name) return sendErr(400, 'Please provide a valid name.', res)
  const response = await db.update(id, { name })
  response
    ? res.redirect('/api/user')
    : sendErr(404, `No user found by id ${id}.`, res)
}

exports.delUser = async ({ params: { id } }, res) => {
  if (!id || isNaN(id)) return sendErr(400, 'Please provide a valid id.', res)
  const response = await db.remove(id)
  response
    ? res.redirect('/api/user')
    : sendErr(404, `No user found by id ${id}.`, res)
}
