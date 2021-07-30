const db = require("../../data/db-config");

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
  findPostComments,
  insertCommentsById,
  insertComments,
};

function find() {
  return db("posts");
}

function findById(id) {
  return db("posts")
    .where({ id: Number(id) })
    .first();
}

function insert(post) {
  return db("posts")
    .insert(post, "id")
    .then((ids) => ({ id: ids[0] }));
}

function update(id, post) {
  return db("posts").where("id", Number(id)).update(post);
}

function remove(id) {
  return db("posts").where("id", Number(id)).del();
}

function findPostComments(postId) {
  return db("comments")
    .join("posts", "posts.id", "post_id")
    .select("comments.*", "title as post")
    .where("post_id", postId);
}

function insertCommentsById(id) {
  return db("comments")
    .join("posts", "posts.id", "post_id")
    .select("comments.*", "title as post")
    .where("comments.id", id)
    .first();
}

function insertComments(comment) {
  return db("comments")
    .insert(comment)
    .then((ids) => ({ id: ids[0] }));
}
