const db = require('../../data/dbConfig')

module.exports = {
  get: id => {
    let query = db('users')
    if (id) query.where('id', Number(id)).first()
    return query
  },
  getUserPosts: userId => {
    return db('posts as p')
      .join('users as u', 'u.id', 'p.userId')
      .select('p.id', 'p.text', 'u.name as postedBy')
      .where('p.userId', userId)
  },
  insert: user => {
    return db('users')
      .insert(user)
      .then(ids => ({ id: ids[0] }))
  },
  update: (id, user) => {
    return db('users')
      .where('id', id)
      .update(user)
  },
  remove: id => {
    return db('users')
      .where('id', id)
      .del()
  }
}
