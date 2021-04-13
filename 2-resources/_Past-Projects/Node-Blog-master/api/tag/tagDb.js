const db = require('../../data/dbConfig')

module.exports = {
  get: id => {
    let query = db('tags')
    if (id) query.where('id', id).first()
    return query
  },
  insert: tag => {
    return db('tags')
      .insert(tag)
      .then(ids => ({ id: ids[0] }))
  },
  update: (id, tag) => {
    return db('tags')
      .where('id', id)
      .update(tag)
  },
  remove: id => {
    return db('tags')
      .where('id', id)
      .del()
  }
}
