function Entity(isAlive) {
  this.isAlive = isAlive;
  return this;
}

Entity.prototype.die = function () {
  this.isAlive = false;
};

Entity.prototype.resurrect = function () {
  this.isAlive = true;
};

function Person(firstName, lastName) {
  Entity.call(this, true);
  this.firstName = firstName;
  this.lastName = lastName;
  return this;
}

Person.prototype = Object.create(Entity.prototype);

Person.prototype.greet = function () {
  console.log(`Hi! I am ${this.firstName} ${this.lastName}`);
};

var p = new Person("John", "Doe");
p.greet();
p.die();
console.log(p.isAlive);
p.resurrect();
console.log(p.isAlive);
