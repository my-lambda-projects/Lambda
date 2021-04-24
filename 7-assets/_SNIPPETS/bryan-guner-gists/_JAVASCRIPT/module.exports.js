cat.js
const someCat = {
  name: "Sennacy",
  color: "orange",
  age: 3
};
module.exports = someCat;
// animals.js
const myCat = require( "./cat.js" );
console.log( myCat.name + " is a great pet!" );
