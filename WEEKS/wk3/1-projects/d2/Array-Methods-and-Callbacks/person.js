// Build a  person object.
// - it has a "name" prop.
// - it has an "age" prop.
// - it has a "location" prop.
// - it has a "greet" method that logs "hi, I am name, I'm from location and I am age years old" (do NOT use hard-coded name age or location!)


let person={
  name:"Jim",
  age: 25,
  location: "Indiana",
  greet: function () {
    console.log( ` "hi, I am ${this.name}, I'm from ${this.location} and I am %${this.age} years old` )
  }
}
