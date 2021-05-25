const faker = require("faker");

function getUsers() {
  return Array(10)
    .fill(0)
    .map(() => {
      return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
      };
    });
}

function getUsersMap() {
  let users = getUsers();
  let usersMap = new Map();
  for (let user of users) {
    usersMap.set(user.email, user);
  }
  return usersMap;
}

let usersMap = getUsersMap();
let emails = usersMap.keys();
// console.log(emails);
// for(let email of emails) {
//     console.log(email);
// }
console.log(Array.from(emails));
