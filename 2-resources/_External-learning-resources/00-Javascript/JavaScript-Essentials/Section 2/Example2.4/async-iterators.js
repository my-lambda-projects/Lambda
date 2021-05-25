const faker = require("faker");

const names = Array(10)
  .fill(0)
  .map(() => {
    let name = faker.name.firstName();
    return name;
  });
let namesGenerator = {
  all: names[Symbol.iterator](),
};
for (let name of namesGenerator.all) {
  // console.log(name);
}

function getNameAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(faker.name.firstName());
    }, 2000);
  });
}

namesGenerator.all = {
  [Symbol.asyncIterator]() {
    return {
      next() {
        return getNameAsync().then((name) => {
          return {
            value: name,
            done: false,
          };
        });
      },
    };
  },
};

(async function () {
  for await (let name of namesGenerator.all) {
    console.log(name);
  }
})();
