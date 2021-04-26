/******************************************************************************
 * Travelling Salesman: Exhaustive Search, 4 Cities
 * Optimized for FOUR cities
 * TODO: return arrays of shortest routes
 ******************************************************************************/
'use-strict';
/* eslint no-console: 0 */
const cities = require( './cities' );
const Cities = cities.Cities;
const distance = require( './distance' );
const distanceBetween = distance.distanceBetween;
const count = require( './heapsAlgo' );
const countSet = count.countSet;
const listOfCityIndexes = [];

// console log each city's coordinates
// for (let i = 0; i < Cities.length; i++) {
//   console.log(`${i + 1}.) x: ${Cities[i].x}, y: ${Cities[i].y} = ${Cities[i].name}.`);
// }

// Construct array of index numbers from list of City name and coordinates object
for ( let i = 0; i < Cities.length; i++ ) {
  listOfCityIndexes.push( i );
}

// console log the distance between two cities
// console.log(`${distanceBetween(Cities[0], Cities[1]).toFixed(2)} = from ${Cities[0].name} to ${Cities[1].name}`);
// console.log(`${distanceBetween(Cities[0], Cities[2]).toFixed(2)} = from ${Cities[0].name} to ${Cities[2].name}`);
// console.log(`${distanceBetween(Cities[0], Cities[3]).toFixed(2)} = from ${Cities[0].name} to ${Cities[3].name}`);
// console.log(`${distanceBetween(Cities[1], Cities[0]).toFixed(2)} = from ${Cities[1].name} to ${Cities[0].name}`);
// console.log(`${distanceBetween(Cities[1], Cities[2]).toFixed(2)} = from ${Cities[1].name} to ${Cities[2].name}`);
// console.log(`${distanceBetween(Cities[1], Cities[3]).toFixed(2)} = from ${Cities[1].name} to ${Cities[3].name}`);
// console.log(`${distanceBetween(Cities[2], Cities[0]).toFixed(2)} = from ${Cities[2].name} to ${Cities[0].name}`);
// console.log(`${distanceBetween(Cities[2], Cities[1]).toFixed(2)} = from ${Cities[2].name} to ${Cities[1].name}`);
// console.log(`${distanceBetween(Cities[2], Cities[3]).toFixed(2)} = from ${Cities[2].name} to ${Cities[3].name}`);
// console.log(`${distanceBetween(Cities[3], Cities[0]).toFixed(2)} = from ${Cities[3].name} to ${Cities[0].name}`);
// console.log(`${distanceBetween(Cities[3], Cities[1]).toFixed(2)} = from ${Cities[3].name} to ${Cities[1].name}`);
// console.log(`${distanceBetween(Cities[3], Cities[2]).toFixed(2)} = from ${Cities[3].name} to ${Cities[2].name}`);


// exhaustively enumerate the permutations of the city objects contents
// console.log(countSet([0, 1, 2, 3]));
// console.log(countSet(listOfCityIndexes));
countSet( listOfCityIndexes );
