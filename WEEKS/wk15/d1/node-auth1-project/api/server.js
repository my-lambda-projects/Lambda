const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");
const Store = require("connect-session-knex")(session);
//! cool
const dbConfig = require("../data/db-config");
const userRouter = require("../api/users/users-router");
const authRouter = require("../api/auth/auth-router");

/**
  Do what needs to be done to support sessions with the `express-session` package!
  To respect users' privacy, do NOT send them a cookie unless they log in.
  This is achieved by setting 'saveUninitialized' to false, and by not
  changing the `req.session` object unless the user authenticates.

  Users that do authenticate should have a session persisted on the server,
  and a cookie set on the client. The name of the cookie should be "chocolatechip".

  The session can be persisted in memory (would not be adecuate for production)
  or you can use a session store like `connect-session-knex`.
 */

const server = express();

server.use(
  session({
    name: "chocolatechip",
    secret:
      process.env.SESSION_SECRET ||
      "Vogon poetry is the worst poetry in the universe.",
    cookie: {
      maxAge: 10 * 60 * 1000,
      httpOnly: true,
      secure: false,
    },
    resave: false,
    rolling: true,
    saveUninitialized: false,
    store: new Store({
      dbConfig,
      createTable: true,
      clearInterval: 1000 * 60 * 10,
      tableName: "sessions",
    }),
  })
);
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", userRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

server.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
