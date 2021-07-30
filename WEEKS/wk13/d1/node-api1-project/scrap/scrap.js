const express = require("express");
const Data = require("./users/model");
const server = express();
server.use(express.json());
server.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  Data.findById(userId)
    .then((user) => {
      if (!user) {
        res.status(404).json("User Does Not Exist");
      } else {
        res.json(user);
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
});
server.get("/api/users", (req, res) => {
  Data.find()
    .then((users) => {
      console.log("Users data found and resolved GET CALL: ", users);
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
});
server.post("/api/users", (req, res) => {
  const newUser = req.body;
  if (!newUser.name || !newUser.bio) {
    res.status(400).json({
      message: "Please provide name and bio for the user",
    });
  } else {
    Data.insert(newUser)
      .then((user) => {
        console.log(user);
        res.status(201).json(user);
      })
      .catch((err) => {
        res.status(500).json({
          message: "There was an error while saving the user to the database",
        });
        console.log("Error posting new user from the server", err);
      });
  }
});
server.put("/api/users/:id", async (req, res) => {
  const { id } = req.body;
  const changes = {
    name: "tony",
    bio: "artist",
  };
  try {
    if (!changes.name || !changes.bio) {
      res.status(400).json({
        message: "Please provide name and bio for the user",
      });
    } else {
      const updatedUser = await Data.update(id, changes);
      if (!updatedUser) {
        res.status(404).json({
          message: "The user with the specified ID does not exist",
        });
      } else {
        res.status(200).json(updatedUser);
      }
    }
    const updatedUser = await Data.update(id, changes);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({
      message: "The user information could not be modified",
    });
  }
});
server.delete("/api/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await Data.remove(id);
    if (!deletedUser) {
      res.status(404).json({
        message: "The user with the specified ID does not exist",
      });
    }
  } catch (err) {
    console.log("Error deleting user from the server 500", err);
    res.status(500).json({
      message: "The user could not be removed",
    });
  }
});
server.use("*", (req, res) => {
  console.log(Data);
  res.status(404).json({
    message: "Uh oh! You've found the void!",
  });
});
module.exports = server;
