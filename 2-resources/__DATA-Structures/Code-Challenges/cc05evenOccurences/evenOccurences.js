/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurance items and return the first one.
 * Return null if there are no even-occurance items.
 * example usage:
 * const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
 * console.log(onlyEven); //  4
 */

// VERSION 2 √ ...from 50+ lines of code to 13 :)
const evenOccurence = ( arr ) => {
  const unique = [ ...new Set( arr ) ]; // <---------- Will Set maintain list order????? Also, still not used to spread operator.
  let count = 0;
  for ( i in unique ) {
    count = 0;
    for ( j in arr ) {
      if ( unique[ i ] === arr[ j ] ) {
        count++;
      }
    }
    if ( count % 2 === 0 ) return unique[ i ];
  }
  return null;
};
// // VERSION 1 √
// // I: array
// // F(): if isUnique is false, then return null, then check total number of times
// //      item is in array, %2 === 0 dun, or check next until null
// // O: array item - first instance of item which occurs even # of times in array
// const evenOccurence = (arr) => {
//   arr;
//
//   // I: array
//   // O: if (isUnique(anArray)) ? 1st unique array item : null
//   const isUnique = (anArray) => {
//     if (anArray === null) return null;
//     for (let i = 0; i < anArray.length; i++) {
//       for (let j = i + 1; j < anArray.length; j++) {
//         if (anArray[i] === anArray[j]) {
//           return anArray[i];
//         }
//       }
//     }  return null;
//   };
//
//   // I: array
//   // O: 1st item that occurs an even number of times in an array
//   const countNotUnique = (item, anArrayOfItems) => {
//     if (item === null) /* console.log(`That's some kinda ${item} item`); */ return null;
//     if (anArrayOfItems === null) console.log(`That's some kinda ${anArrayOfItems} anArrayOfItems array there`); // return null;
//     const hold  = [];
//     if (!isUnique(item)) {
//       for (let i = 0; i < anArrayOfItems.length; i++) {
//         if (anArrayOfItems[i] === item) {
//           hold.push(item);
//         }
//       }
//     }
//     return hold;
//   }
//
//   const oddOrEven = (dupesArray) => {
//     const minusOddDupe = [];
//     if (dupesArray === null) return null;
//     const count = dupesArray.length;
//     if (count === 0) {
//       return null;
//     } else if (count % 2 !== 0) {
//       for (let i = 0; i < arr.length; i++) {
//         if (dupesArray[0] !== arr[i]) {
//           minusOddDupe.push(arr[i]);
//         }
//       }
//       return evenOccurence(minusOddDupe); // <--------- LOOK MA, RECURSION!!!!!
//     }
//     return dupesArray[0];
//   }
//
//   return oddOrEven(countNotUnique(isUnique(arr), arr));
// };
//
// // evenOccurence TEST SUITE:
// // evenOccurence();
// console.log(`Invoking evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1])} returns the repeated integer: ${evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1])}`);
// evenOccurence([5, 1, 1, 1, 1]); // <------------------------ 1 x4 >>> 1
// evenOccurence([1, 2, 3]) // <------------------------------- null
// evenOccurence([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // <----- null
// evenOccurence([5, 1, 1, 1, 6, 1, 1]); // <--------- 1 x5 >>> null
// evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]); // <--- 4 x2 >>> 4
//
// const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
// console.log(onlyEven); // <--- 4
// const onlyEven2 = evenOccurence([ 1, 7, 2, 4, 5, 6, 8, 9 ]);
// console.log(onlyEven2); // <--- null
// const onlyEven3 = evenOccurence([ 1, 3, 3, 3, 5, 5, 5, 5, 5 ]);
// console.log(onlyEven3); // <--- null

// // Tai's solution
// const evenOccurence = (arr) => {
//   // Your code here.
//   const obj = {};
//   let first;
//   arr.forEach((item) => {
//     if (obj[item] === undefined) return obj[item] = 1;
//     if (obj[item] === 1) return obj[item] = 2;
//     if (obj[item] === 2) return obj[item] = 1;
//   });
//   arr.forEach((item) => {
//     if(obj[item] === 2 && first === undefined) first = item;
//   });
//   if (first) return first;
//   return null;
// };
