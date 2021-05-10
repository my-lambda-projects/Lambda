/**
 * Common Characters:
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. *
 * Your function should return the common characters in the same order that they appear in the first argument.
 * Do not return duplicate characters and ignore whitespace in your returned string.  *
 * Example: commonCharacters('acexivou', 'aegihobu')  *
 * Returns: 'aeiou'
 */

const commonCharacters = ( str1, str2 ) => {
  // we need a dictionary (obj) preset " " to 3;
  // let str = "";
  // iterate over the second string, for each
  // if !object[char] object[char] = 1;
  // iterate over the first string, for each
  // if (object[char] === 1)
  // object[char] = 2;
  // str += char;
  // return str;
  const obj = {
    ' ': 3
  };
  let str = '';
  //   str2.forEach((char) => {
  //     if (!obj[char]) obj[char] = 1;
  //   });
  for ( let i = 0; i < str2.length; i++ ) {
    if ( !obj[ str2[ i ] ] ) obj[ str2[ i ] ] = 1;
  }
  //   str1.forEach((char) => {
  //     if (obj[char] === 1) {
  //       obj[char] = 2;
  //       str += char;
  //     }
  //   });
  for ( let i = 0; i < str1.length; i++ ) {
    if ( obj[ str1[ i ] ] === 1 ) {
      obj[ str1[ i ] ] = 2;
      str += str1[ i ];
    }
  }
  return str;
};

console.log( commonCharacters( 'acex ivou', 'ae gihobu' ) );
