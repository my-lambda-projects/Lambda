// implement your posts router here
const express = require("express");
const posts = require("./posts-model");

const router = express.Router();

//get all
router.get("/", (req, res) => {
  posts
    .find()
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch(() => {
      res
        .status(500)
        .json({ message: "The posts information could not be retrieved" });
    });
});

//get by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  posts
    .findById(id)
    .then((resp) => {
      if (resp === undefined || resp === null) {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist" });
      } else {
        res.status(200).json(resp);
      }
    })
    .catch(() => {
      res
        .status(500)
        .json({ message: "The post information could not be retrieved" });
    });
});

//post
router.post("/", (req, res) => {
  const data = req.body;
  data.id = Date.now();

  if (!data.title || !data.contents) {
    res
      .status(400)
      .json({ message: "Please provide title and contents for the post" });
  } else {
    posts
      .insert(data)
      .then(() => {
        res.status(201).json(data);
      })
      .catch(() => {
        res
          .status(500)
          .json({
            message: "There was an error while saving the post to the database",
          });
      });
  }
});

//put
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const data = req.body;
  data.id = Number(id);

  if (!data.title || !data.contents) {
    res
      .status(400)
      .json({ message: "Please provide title and contents for the post" });
  } else {
    posts.findById(id).then((resp) => {
      if (resp === undefined || resp === null) {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist" });
      } else {
        posts
          .update(id, data)
          .then(() => {
            res.status(201).json(data);
          })
          .catch(() => {
            res
              .status(500)
              .json({ message: "The post information could not be modified" });
          });
      }
    });
  }
});

//delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  posts.findById(id).then((resp) => {
    if (resp === undefined || resp === null) {
      res
        .status(404)
        .json({ message: "The post with the specified ID does not exist" });
    } else {
      const data = resp;
      posts
        .remove(id)
        .then((resp) => {
          if (resp === undefined || resp === null) {
            res
              .status(404)
              .json({
                message: "The post with the specified ID does not exist",
              });
          } else {
            res.status(201).json(data);
          }
        })
        .catch(() => {
          res.status(500).json({ message: "The post could not be removed" });
        });
    }
  });
});

//get comments
router.get("/:id/comments", (req, res) => {
  const { id } = req.params;

  posts
    .findById(id)
    .then((resp) => {
      if (resp === undefined || resp === null) {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist" });
      } else {
        posts
          .findPostComments(id)
          .then((resp) => {
            if (resp === undefined || resp === null) {
              res
                .status(404)
                .json({
                  message: "The post with the specified ID does not exist",
                });
            } else if (resp === []) {
              res
                .status(404)
                .json({
                  message: "The post with the specified ID does not exist",
                });
            } else {
              res.status(200).json(resp);
            }
          })
          .catch(() => {
            res
              .status(500)
              .json({
                message: "The comments information could not be retrieved",
              });
          });
      }
    })
    .catch(() => {
      res
        .status(500)
        .json({ message: "The comments information could not be retrieved" });
    });
});

module.exports = router;
