/*
 * Implement an algorithm to determine if a string has all unique characters.
 * Extra Credit - Answer this question - What if you cannot use additional data structures?
 */
const isUnique = ( str ) => {
  for ( let i = 0; i < str.length; i++ ) {
    for ( let j = i + 1; j < str.length; j++ ) {
      // console.log(`Q: does ${str[i]} === ${str[j]}? A: ${str[i] === str[j]}`)
      if ( str[ i ] === str[ j ] ) {
        return false;
      }
    }
  }
  return true;
};

console.log( isUnique( 'abcdhijklmnopqrstuv' ) ); // true
console.log( isUnique( 'abcdefghijklmnopqrstuvwyz' ) ); // true
console.log( isUnique( 'abcdefga' ) ); // false
console.log( isUnique( 'bcdgefga' ) ); // false
console.log( isUnique( [ 1, 2, 3, 4, 5, 6, 3 ] ) ); // false
console.log( isUnique( [ 0, 1, 2, 3, 4, 6, 7, 8, 9, 9 ] ) ); // false
