//finished version of the app.js file
"use strict";
const express = require("express");
const app = express();
const port = process.env.port || 4444;
const things = require("./routes/things");

app.use(express.json());
app.use("/things", things);
//use the things.js file to handle
//endpoints that start with /things

app.get("/", (req, res) => {
  //handle root
  res.send("hello root");
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
 * ^ - starts with
 */
