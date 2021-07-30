const express = require("express")
const helmet = require("helmet");
const router = require("./recipe-router");
const server = express();
server.use(helmet());
server.use(express.json());

server.use("/api/recipes", router)


module.exports = server;