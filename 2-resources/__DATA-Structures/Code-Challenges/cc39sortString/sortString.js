/* cc39 sortString https://repl.it/student/submissions/1467240
Write a function called sortString that returns a passed string with letters in alphabetical order.

Expected Input:

'dcba'
'zycxbwa'

Expected Output:

'abcd'
'abcwxyz'
*/

function sortString( str ) {
  // arr = str.split('');
  // console.log(arr);
  // sorted = arr.sort();
  // console.log(sorted);
  return str.split( '' ).sort().join( '' );
}

// // TEST SUITE
// console.log(sortString('dcba'));    // ~~~> 'abcd'
// console.log(sortString('zycxbwa')); // ~~~> 'abcwxyz'
