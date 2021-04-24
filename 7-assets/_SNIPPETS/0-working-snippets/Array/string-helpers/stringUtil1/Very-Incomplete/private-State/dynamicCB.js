// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("What do you think of Node.js? ", (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);
//
//   rl.close();
// });

let array = [...objArr]; // An array with some objects

function cbClose(i, callback) {
  return function () {
    return callback(i);
  };
}

for (let i = 0; i < array.length; ++i) {
  readline.dynamicCbs(
    cbClose(i, function (i) {
      array[i].something = 42;
    })
  );
}
