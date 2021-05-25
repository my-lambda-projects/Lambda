var copy = require("copy");
var path = require("path");
copy(
  path.join(__dirname, "..", "*.spec.ts"),
  path.join(__dirname, "..", "solutions"),
  function (err) {
    if (err) {
      throw err;
    }
  }
);
