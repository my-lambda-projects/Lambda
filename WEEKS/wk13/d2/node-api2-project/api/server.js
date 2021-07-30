// implement your server here
// require your posts router and connect it here

const express = require("express");
const postRouter = require("./posts/posts-router");

const server = express();

server.use(express.json());
server.use("/api/posts", postRouter);

// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda post API</h>
    <p>Welcome to the Lambda Post API</p>
  `);
});

module.exports = server;
