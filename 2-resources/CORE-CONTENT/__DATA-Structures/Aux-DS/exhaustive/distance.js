/******************************************************************************
 * Travelling Salesman: Exhaustive Search
 * Calculate the distance between two coordinates
 *
 ******************************************************************************/
'use-strict';
/* eslint no-console: 0 */

const distanceBetween = ( city1, city2 ) => {
  // console.log(`The distance between ${city1.name} & ${city2.name}:`);
  const x = Math.pow( city1.x - city2.x, 2 );
  const y = Math.pow( city1.y - city2.y, 2 );
  return Math.sqrt( x + y );
};

module.exports = {
  distanceBetween,
};
