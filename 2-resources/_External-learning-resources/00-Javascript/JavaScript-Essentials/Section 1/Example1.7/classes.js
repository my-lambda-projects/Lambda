class Entity {
  constructor(isAlive) {
    this.isAlive = isAlive;
  }

  die() {
    this.isAlive = false;
  }

  resurrect() {
    this.isAlive = true;
  }
}

class Person extends Entity {
  constructor(firstName, lastName) {
    super(true);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    console.log(`Hi! I am ${this.firstName} ${this.lastName}`);
  }
}

var p = new Person("John", "Doe");
p.greet();
p.die();
console.log(p.isAlive);
p.resurrect();
console.log(p.isAlive);
