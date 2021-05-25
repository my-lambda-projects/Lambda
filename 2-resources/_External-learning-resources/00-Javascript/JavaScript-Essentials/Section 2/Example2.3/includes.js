const faker = require("faker");

function generateNames(amount) {
  return Array(amount)
    .fill(0)
    .map(() => faker.name.firstName());
}

let names = generateNames(100);
names.push("Jessy");

//The indexOf way
if (names.indexOf("Jessy") >= 0) {
  console.log("Jessy exists");
} else {
  console.log("Jessy does not exist");
}

//The find way
if (names.find((n) => n == "Jessy") != undefined) {
  console.log("Jessy exists");
} else {
  console.log("Jessy does not exist");
}

// The Array.prototype.includes way
if (names.includes("Jessy")) {
  console.log("Jessy exists");
} else {
  console.log("Jessy does not exist");
}
