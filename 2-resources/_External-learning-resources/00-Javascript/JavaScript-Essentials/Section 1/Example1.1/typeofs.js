"use strinct";

var stringValue = "this is a string";
console.log(typeof stringValue);

var numberValue = 43;
console.log(typeof numberValue);

var booleanValue = false;
console.log(typeof booleanValue);

var objectValue = {
  stringValue,
  numberValue,
};
console.log(typeof objectValue);

var symbolValue = Symbol("this is a symbol");
console.log(typeof symbolValue);

function doThis() {}
console.log(typeof doThis);

class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
console.log(typeof User);

var undefinedValue = undefined;
console.log(typeof undefinedValue);
