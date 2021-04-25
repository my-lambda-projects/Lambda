/* cc38 reverseNumber https://repl.it/student/submissions/1460542
Write a function called reverseNumber that reverses a number.

Input Example:
12345
555

Output Example:
54321
555
*/

function reverseNumber( num ) {
  // console.log(num);
  string = num.toString();
  // console.log(string);
  // console.log(typeof(string));
  arr = string.split( '' );
  // console.log(arr);
  reverse = arr.reverse();
  // console.log(reverse);
  join = reverse.join( '' )
  // console.log(join);
  result = Number( join );
  return result;
}


// TEST SUITE
// console.log(reverseNumber(12345)); // ~~> 54321
// console.log(reverseNumber(555)); // ~~> 555
