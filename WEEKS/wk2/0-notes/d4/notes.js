// Objects
// major fundamental building block of JS
// allow us to group properties and values together
// order of properties does not matter

// const dog = {
//   // key value pairs
//   name: 'Lola',
//   breed: 'Yorkie',
//   age: 2,
//   color: 'light brown',
//   favFood: 'beef gravy',
//   // methods - functions that belong to an object
//   eat: function(){
//     return `${this.name} likes to eat ${this.favFood}`
//     // you can do dog.name or dog.food
//   }
// }

// console.log(dog);
// // printing objects in different editors and consoles may show "different" results
// // the properties ay print in alphabetical order
// // and sometimes methods may not print

// // how can we access values in an object?
// // 1. Dot notation -- see this a lot more often
// // to the left of the dot is the object name and to the right of the dot is the key
// // dog.age; --> this would return 2

// console.log(dog.color);

// //2. Bracket notation
// // dog['age'] --> this would return 2

// console.log(dog['color']);

// // these notations work for key and values of string and numbers and etc
// // but for methods use the dot notation

// console.log(dog.eat());

// // example - playing around with the method

// const dog2 = {
//   // key value pairs
//   name: 'Lola',
//   breed: 'Yorkie',
//   age: 2,
//   color: 'light brown',
//   favFood: 'beef gravy',
//   // methods - functions that belong to an object
//   eat: function(food){
//     return `${this.name} likes to eat ${food}`
//     // you can do dog.name or dog.food
//   }
// }

// console.log(dog2.eat('hotdogs'))

// nested objects

// const dog = {
//   name: 'Lola',
//   breed: 'Yorkie',
//   age: 2,
//   favToy: {
//     name: 'Mr Twinkle',
//     type: 'plush toy',
//     condition: 'fair',
//     currentlyUsed: true
//   },
//   play: function(){
//     return `${this.name} likes to play with ${this.favToy.name}`
//     // another way to access favToy properties
//     // this.favToy['name']
//   }
// }

// console.log(dog.play());

// you can also nest objects into an array

// const places = [
//   // each object is accessed by index
//   {city: 'NYC', country: 'United States', region: 'North America'}, // index 0
//   {city: 'Paris', country: 'France', region: 'Europe'}, // index 1
//   {city: 'Toronto', country: 'Canada', region: 'North America'}, // index 2
//   // 2, --> adding other value types still makes this a valid array
//   // 'a random string',
//   // [0,1,2]
// ]

// how can we access index 2 city name
// console.log(places[2].city);
// console.log(places[2]['city']);// --> bracket notation would still work
// // console.log(places[3]); --> this would bring out 2 because objects will not change the index

// nest an array into an object

// const dog = {
//   name: 'Lola',
//   breed: 'Yorkie',
//   age: 2,
//   favToys: ['Mr Twinkle', 'Big Bone', 'Tennis Ball'],
//   play: function(){
//     return `${this.name} likes to play with ${this.favToys[0]}`
//     // another way to access favToy properties
//     // this.favToy['name']
//   }
// }

// console.log(dog.play());

// // examples with objects
// const places = [
//   // each object is accessed by index
//   {city: 'NYC', country: 'United States', region: 'North America'}, // index 0
//   {city: 'Paris', country: 'France', region: 'Europe'}, // index 1
//   {city: 'Toronto', country: 'Canada', region: 'North America'}, // index 2
// ]

// // how would I create a new array called North America and push all the objects in the North America region?

// let northAmerica = [];

// for(let i = 0; i < places.length; i++){
//   if(places[i].region === 'North America'){
//     northAmerica.push(places[i].city);
//   }
// }

// console.log(northAmerica);

// create a function that adds a new object to the end of the array
// our function is going to take 4 parameters: array name, city, country, region
// it should return the array with the new object

// examples with objects
// const places = [
//   // each object is accessed by index
//   {city: 'NYC', country: 'United States', region: 'North America'}, // index 0
//   {city: 'Paris', country: 'France', region: 'Europe'}, // index 1
//   {city: 'Toronto', country: 'Canada', region: 'North America'}, // index 2
// ]

// function addCountry(array, city, country, region){
//   array.push({city, country, region});
//   return array;
// }

// another way to do it
// function addCountry(array, cityName, countryName, region){
//   array.push({city: cityName, country: countryName, region: region});
//    return array;
// }

// another way to do it
// function addCountry(array, city, country, region){
//   let newCountry = {city, country, region}
//   array.push(newCountry);
//    return array;
// }

// console.log(addCountry(places, 'Mexico City', 'Mexico', 'North America'));

// Change values in an object

// let city =  {
//   name:'Mexico City',
//   country: 'Mexico',
//   region: 'North America'
// }

// city.name = 'Cabo'

// console.log(city);

// const places = [
//   // each object is accessed by index
//   {city: 'NYC', country: 'United States', region: 'North America'}, // index 0
//   {city: 'Paris', country: 'France', region: 'Europe'}, // index 1
//   {city: 'Toronto', country: 'Canada', region: 'North America'}, // index 2
// ]

// places[0].city = 'Chicago';
// console.log(places);

// function changeCity(array, index, newCity){
//   array[index].city = newCity;
//   return array;
// }

// console.log(changeCity(places, 0, 'Miami'));

// Using functions to create objects
// examples make a pet object that has a name, species and well behaved (as a boolean) from a function

/*
{
  name: 'Lola',
  species: 'dog',
  well-behaved: false

*/

function createPet(name, species, wellBehaved) {
  let obj = {};
  obj = { name, species, wellBehaved };
  return obj;
}

function createPet2(obj, name, species, wellBehaved) {
  obj = { name, species, wellBehaved };
  return obj;
}

function createPet3(name, species, wellBehaved) {
  return { name, species, wellBehaved };
}

console.log(createPet("Lola", "Yorkie", true));
// const lolaOne = createPet('Lola', 'Yorkie', true)
// console.log(lolaOne)

let myPet = {};
myPet = createPet2(myPet, "Lola", "Yorkie", true);
console.log(myPet);

console.log(createPet3("Lola", "Yorkie", true));
// const lolaThree = createPet3('Lola', 'Yorkie', true)
// console.log(lolaThree);

// pushing to an array
let petArray = [];

function createPetArray(name, species, wellBehaved) {
  petArray.push({ name, species, wellBehaved });
}

createPetArray("Lola", "Yorkie", true);
console.log(petArray);
