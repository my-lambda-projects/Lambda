/* cc45 deepEquality https://repl.it/student/submissions/1538402
Write a function that, given two objects, returns whether or not the two
are deeply equivalent--meaning the contents of the two objects are equal for all keys and sub-keys.
*/

function deepEquals( obj1, obj2 ) {
  return JSON.stringify( obj1 ) === JSON.stringify( obj2 );
}

// Examples:
const johnA = {
  name: 'John',
  address: {
    line1: '321 Anytown',
    line2: 'Stoke-on-Trent'
  }
};
const johnB = {
  name: 'John',
  address: {
    line1: '321 Anytown',
    line2: 'Stoke-on-Trent'
  }
};
const johnC = {
  name: 'John Charles',
  address: {
    line1: '321 Anytown',
    line2: 'Stoke-on-Trent'
  }
};
/* eslint no-console: 0 */
console.log( deepEquals( johnA, johnB ) ); // true
console.log( deepEquals( johnA, johnC ) ); // false;
