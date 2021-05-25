Date.prototype.addDays = function (days) {
  return new Date(this.valueOf() + days * 864e5);
};
console.log(new Date().addDays(1117));

function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}
Person.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};
const me = new Person("Laurence", "svekis");
console.log(me);
console.log(me.fullName());
