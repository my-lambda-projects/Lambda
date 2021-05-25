const faker = require("faker");

const names = Array(10)
  .fill(0)
  .map(() => {
    return faker.name.firstName();
  });

let namesGenerator = {
  all: names[Symbol.iterator](),
};

for (let name of namesGenerator.all) {
  console.log(name);
}
