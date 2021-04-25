/* cc51 combineTwoStrings https://repl.it/student/submissions/1677604

Given three strings, str1, str2, str3.
str3 is said to be a shuffle of str1 and str2 if it can be formed by
interleaving the characters of str1 and str2 in such a manner that
it maintains left to right ordering from each string.
Given str1 = 'abc' and str2 = 'def', str3 = 'dabecf' is a valid shuffle
since it preserves the character ordering of the two strings.

So, given these three strings, write a function that detects
whether str3 is a valid shuffle of str1 and str2.
*/

function checkString( str1, str2, str3 ) {
  // compare intersection of str1 str3
  // compare intersection of str2 str3
  // if both === true, else false
  const arr1 = str1.split( '' );
  console.log( 'arr1', arr1 );
  const arr2 = str2.split( '' );
  console.log( 'arr2', arr2 );
  const arr3 = str3.split( '' );
  console.log( 'arr3', arr3 );
  const a = new Set( arr1 );
  const b = new Set( arr2 );
  const c = new Set( arr3 );
  const intersection1 = [ ...a ].filter( x => c.has( x ) );
  console.log( '1 ∩ 3', intersection1 );
  console.log( new Array( intersection1 ) );
  const intersection2 = [ ...b ].filter( x => c.has( x ) );
  console.log( '2 ∩ 3', intersection2 );
  console.log( new Array( intersection2 ) );
  // console.log(JSON.stringify(new Array(intersection2[0])));
  if ( JSON.stringify( new Array( intersection1 ) ) === JSON.stringify( [ arr1 ] ) && JSON.stringify( new Array( intersection2[ 0 ] ) ) === JSON.stringify( [ arr2 ] ) ) return true;
  return false;
}

// TEST SUITE
console.log( checkString( 'abc', 'def', 'dabecf' ) );
