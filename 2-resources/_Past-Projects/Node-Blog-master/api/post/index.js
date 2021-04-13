const db = require('./postDb')
const { sendErr } = require('../middleware')

exports.getPosts = async ({ params: { id } }, res) => {
  const response = await db.get(id || '')
  response ? res.json(response) : sendErr(404, 'No post(s) found.', res)
}
