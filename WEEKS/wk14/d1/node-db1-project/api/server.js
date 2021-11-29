const express = require("express");
const accountsRouter = require('./accounts/accounts-router');

const server = express();

server.use(express.json());

server.use('/api/accounts', accountsRouter);

module.exports = server;
