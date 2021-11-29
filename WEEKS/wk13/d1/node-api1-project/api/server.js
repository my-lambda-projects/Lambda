// BUILD YOUR SERVER HERE
// imports
const express = require("express");
const cors = require("cors");
const db = require("./users/model");

// express app
const server = express();

// global middleware
server.use(express.json());
server.use(cors());

//endpoints
// get helloWorld
server.get("/", (req, res) => {
  res.status(200).json({ message: "Yip, Yip, Appa!" });
});

//get all users
server.get("/api/users", (req, res) => {
  db.find()
    .then((resp) => {
      res.status(200).json(resp);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "The users information could not be retrieved" });
    });
});

//get user by id
server.get("/api/users/:id", (req, res) => {
  const { id } = req.params;

  db.findById(id)
    .then((resp) => {
      if (resp === undefined) {
        res.status(404).json({ message: "/does not exist/" });
      } else {
        res.status(200).json(resp);
      }
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ message: "The user with the specified ID does not exist" });
    });
});

//post new user
server.post("/api/users", (req, res) => {
  const id = Date.now();
  const item = req.body;

  item.id = id;
  if (!item.name || !item.bio) {
    res.status(400).json({ message: "/provide name and bio/" });
  } else {
    db.insert(item)
      .then(() => {
        res.status(201).json(item);
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({
            message: "There was an error while saving the user to the database",
          });
      });
  }
});

//put update user by id
server.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  if (!changes.name || !changes.bio) {
    res
      .status(400)
      .json({ message: "Please provide name and bio for the user" });
  } else {
    db.update(id, changes)
      .then((resp) => {
        if (resp === undefined || resp === null) {
          res.status(404).json({ message: "/does not exist/" });
        } else {
          res.status(201).json(resp);
        }
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({ message: "The user information could not be modified" });
      });
  }
});

//delete delete user by id
server.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;

  db.remove(id)
    .then((resp) => {
      if (!resp) {
        res
          .status(404)
          .json({ message: "The user with the specified ID does not exist" });
      } else {
        res.status(200).json(resp);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "The user could not be removed" });
    });
});

module.exports = server; // EXPORT YOUR SERVER instead of {}
