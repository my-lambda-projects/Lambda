// String Compression: Implement a method to perform basic string compression using
// the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3.
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

/* eslint no-console: 0 */

const compressor = function ( str ) {
  // is there a simple check prevent the algorithm from running
  // if it would make a longer string? Seems like not having to
  // calculate the algorithm first to then evaluate if it
  // made the string longer would make for a much better
  // Order of Complexity...?

  // compression algorithm
  const arr = [];
  let count = 1;
  for ( let i = 0; i < str.length; i++ ) {
    if ( str[ i ] === str[ i + 1 ] ) {
      count++;
    } else if ( ( str[ i ] != str[ i + 1 ] ) ) {
      arr.push( `${str[i]}${count}` );
      count = 1;
    }
  }
  const compressed = arr.join( '' );
  // // return original string if compressing made a longer string
  // if (str.length <= compressed.length) return `inadequate algorithm`;
  // return compressed;
  // ternary
  return str.length <= compressed.length ? str : compressed;
};

// TEST SUITE
const test = compressor( 'aabcccccaaa' ); // ---> a2b1c5a3
console.log( test );
console.log( compressor( 'abca' ) ); // ---> abca: inadequate compression algorithm
console.log( compressor( 'aabbcc' ) ); // ---> aabbcc: inadequate compression algorithm
console.log( compressor( 'aabbccc' ) ); // ---> a2b2c3
