//Starter version of the main app.js file
"use strict";
const express = require("express");
const app = express();
const port = process.env.port || 4444;

app.get("/", (req, res) => {
  //handle root
});

app.listen(port, err => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`Listening on port ${port}`);
});

/**
 * "/abc" - handles /abc
 * "/ab?cd" - handles /acd or /abcd
 * "/ab+cd" - handles /abcd, /abbbcd, /abbbbbbbcd, etc
 * "/ab*cd" - "/ab" + anything + "cd"
 * /a/ - RegExp: anything that contains "a"
 * /.*man$/ - RegExp: anything that ends with "man"
 *
 */