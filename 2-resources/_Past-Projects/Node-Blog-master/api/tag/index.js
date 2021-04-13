const db = require('./tagDb')
const { sendErr } = require('../middleware')

exports.getTags = async ({ params: { id } }, res) => {
  const response = await db.get(id || '')
  response ? res.json(response) : sendErr(404, 'No post(s) found.', res)
}

exports.postTag = async ({ body: { tag } }, res) => {
  if (!tag) return sendErr(400, 'Please provide a valid tag.', res)
  if (tag.length > 80)
    return sendErr(400, 'Tag must be less than 128 characters.', res)
  const response = await db.insert({ tag })
  response
    ? res.redirect('/api/tag')
    : sendErr(400, 'Unable to add user to the database.', res)
}