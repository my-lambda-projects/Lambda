// Steve's idea:
const equalityCheck = ( x, y ) => {
  if ( x === y ) return true;
}

const breadthFirstSearch = ( tree, searchTerm ) => {
  let queue = Object.values( tree );
  while ( queue.length > 0 ) {
    value = queue.shift();
    if ( equalityCheck( value, searchTerm ) );
    if ( typeof value === 'object' && value !== null && !Array.isArray( value ) ) {
      queue = queue.concat( Object.values( value ) );
    }
  }
  return false;
};
