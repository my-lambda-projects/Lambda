function Animal() {}

Animal.prototype.numberOfLegs = 0;
Animal.prototype.pairsOfEyes = 0;
Animal.prototype.age = 0;

Animal.prototype.printLegsAndEyes = function () {
  console.log(
    "I have " +
      this.numberOfLegs +
      " legs and " +
      this.pairsOfEyes * 2 +
      " eyes."
  );
};

Animal.prototype.printAge = function () {
  console.log("I am " + this.age + " years old.");
};

function Mammal() {}
Mammal.prototype = new Animal();
Mammal.prototype.constructor = Mammal;
Mammal.prototype.isPregnant = false;
Mammal.prototype.pairsOfEyes = 1;

function DomesticMammal() {}

DomesticMammal.prototype = new Mammal();
DomesticMammal.prototype.constructor = DomesticMammal;
DomesticMammal.prototype.name = "";
DomesticMammal.prototype.favoriteToy = "";

DomesticMammal.prototype.talk = function () {
  console.log(this.name + ": talks");
};

function Dog() {}
Dog.prototype = new DomesticMammal();
Dog.prototype.constructor = Dog;
Dog.prototype.numberOfLegs = 4;
Dog.prototype.breed = "Just a dog";
Dog.prototype.breedFamily = "Dog";

Dog.prototype.printBreed = function () {
  console.log(this.breed);
};

Dog.prototype.printBreedFamily = function () {
  console.log(this.breedFamily);
};

Dog.prototype.bark = function (times, otherDomesticMammal, isAngry) {
  var message = this.name;
  if (otherDomesticMammal) {
    message += " to " + otherDomesticMammal.name + ": ";
  } else {
    message += ": ";
  }
  if (isAngry) {
    message += "Grr ";
  }
  if (!times) {
    times = 1;
  }
  message += new Array(times + 1).join("Woof ");
  console.log(message);
};

Dog.prototype.talk = function () {
  this.bark(1);
};

function TerrierDog() {}
TerrierDog.prototype = new Dog();
TerrierDog.prototype.constructor = TerrierDog;
TerrierDog.prototype.breed = "Terrier dog";
TerrierDog.prototype.breedFamily = "Terrier";

function SmoothFoxTerrier() {}
SmoothFoxTerrier.prototype = new TerrierDog();
SmoothFoxTerrier.prototype.constructor = TerrierDog;
SmoothFoxTerrier.prototype.breed = "Smooth Fox Terrier";

SmoothFoxTerrier.create = function (name, age, favoriteToy, isPregnant) {
  var dog = new SmoothFoxTerrier();
  dog.name = name;
  dog.age = age;
  dog.favoriteToy = favoriteToy;
  dog.isPregnant = isPregnant;

  return dog;
};

Animal.prototype.lessThan = function (other) {
  return this.age < other.age;
};

Animal.prototype.lessOrEqualThan = function (other) {
  return this.age <= other.age;
};

Animal.prototype.greaterThan = function (other) {
  return this.age > other.age;
};

Animal.prototype.greaterOrEqualThan = function (other) {
  return this.age >= other.age;
};

var tom = SmoothFoxTerrier.create("Tom", 5, "Sneakers");
tom.printBreed();
tom.printBreedFamily();

console.log(tom instanceof Animal);
console.log(tom instanceof Mammal);
console.log(tom instanceof DomesticMammal);
console.log(tom instanceof Dog);
console.log(tom instanceof TerrierDog);
console.log(tom instanceof SmoothFoxTerrier);

var pluto = SmoothFoxTerrier.create("Pluto", 6, "Tennis ball");
var goofy = SmoothFoxTerrier.create("Goofy", 8, "Soda bottle");

console.log(tom.greaterThan(pluto));
console.log(tom.lessThan(pluto));
console.log(goofy.greaterOrEqualThan(tom));
console.log(tom.lessOrEqualThan(goofy));

tom.bark();
tom.bark(2);
tom.bark(2, pluto);
tom.bark(3, pluto, true);
