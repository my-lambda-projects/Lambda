// https://repl.it/student/assignments/351153/model_solution?fromSubmissionId=1467240

// function sortString(str) {
//   return str.split('').sort().join('');
// }

// Ivan's recursive bubble sort solution
// function sortString (string) {
//   let sorted = true;
//   let sortedString = string.split('');
//
//   for (let i = 1; i < sortedString.length; i++) {
//     if (sortedString[i].toLowerCase() < sortedString[i - 1].toLowerCase()) {
//       sortedString.splice(i - 1, 0, sortedString[i]);
//       sortedString.splice(i + 1, 1);
//       sorted = false;
//     }
//   }
//
//   sortedString = sortedString.join('');
//
//   return sorted === true ? sortedString : sortString(sortedString);
// }
//
// sortString('dcBa')

// preserving case
function sortString( str ) {
  // console.log(str.split(''));
  // console.log(str.split('').sort((a, b) => a.toLowerCase < b.toLowerCase));
  // console.log(str.toLowerCase());
  return str.split( '' ).sort( ( a, b ) => a.toLowerCase() > b.toLowerCase() ).join( '' );
}

// TEST SUITE
console.log( sortString( 'dcBa' ) ); // ~~~> 'aBcd'
