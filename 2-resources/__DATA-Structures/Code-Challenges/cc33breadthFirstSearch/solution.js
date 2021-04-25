/* eslint no-console: 0 */

const breadthFirstSearch = ( tree, searchTerm ) => {
  let queue = Object.values( tree );
  while ( queue.length > 0 ) {
    let value = queue.shift();
    if ( value === searchTerm ) return true;
    if ( typeof value === 'object' && value !== null && !Array.isArray( value ) ) {
      queue = queue.concat( Object.values( value ) );
    }
  }
  return false;
};

// TEST SUITE
const tree = {
  x: 1,
  y: 1,
  z: {
    x: 1,
    y: 1,
    z: 1,
  },
  a: 2,
};

console.log( Object.values( tree ) );
console.log( breadthFirstSearch( tree, 2 ) );
