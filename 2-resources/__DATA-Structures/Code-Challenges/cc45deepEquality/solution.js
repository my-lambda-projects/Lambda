// https://repl.it/student/assignments/385242/model_solution?fromSubmissionId=1539350
// Solution lecture pt1: https://youtu.be/251rmsXo9lI
// Solution lecture pt2: https://youtu.be/aPBH-Vde8BU

function deepEquals( obj1, obj2 ) {
  return JSON.stringify( obj1 ) === JSON.stringify( obj2 );
}

// // Antonio's solution from SO
// // https://stackoverflow.com/questions/25456013/javascript-deepequal-comparison
// function deepEquals(arr1, arr2) {
//   if ((typeof arr1 == "object" && arr1 != null) && (typeof arr2 == "object" && arr2 != null)) {
//     if (Object.keys(arr1).length != Object.keys(arr2).length)
//       return false;
//
//     for (var prop in arr1) {
//       if (arr2.hasOwnProperty(prop))
//       {
//         if (! deepEquals(arr1[prop], arr2[prop]))
//           return false;
//       }
//       else
//         return false;
//     }
//
//     return true;
//   }
//   else if (arr1 !== arr2)
//     return false;
//   else
//     return true;
// }
