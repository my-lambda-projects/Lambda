// BREAKOUT
// create a function that will return an object of a person
// so it should have name, age, location (city), favorite color properties
// and a method that prints out a greeting like "Hi, my name is Gabby"

function person(name, age, location) {
  let personObj = {
    name: name,
    age: age,
    loation: location,
  };

  return personObj;
}
person("bryan", 25, "Weehawken");
console.log(
  `person( 'bryan', 25, 'Weehawken' ): `,
  person("bryan", 25, "Weehawken")
);
