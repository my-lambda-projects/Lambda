// Code Challenge # 15

// INPUT:    array of numbers
// FUNCTION: sort from {array[0]: low} to {array[n-1]: high}
// OUTPUT:   sorted array
const bubbleSort = ( arr, count = 0 ) => {
  // compare all (current/next) index pairs
  for ( let i = 0; i < arr.length; i++ ) {
    // index pairs
    let current = arr[ i ];
    let next = arr[ i + 1 ];
    // counter to track sorting passes
    let sorting = count;

    // IF current is greater than next,
    // THEN swap index pairs & increment sorting counter.
    // ELSE reset sorting counter to zero (to prevent recursive call)
    if ( current > next ) {
      arr[ i ] = next;
      arr[ i + 1 ] = current;
      sorting++;
    } else sorting = 0;

    // IF index pairs were swapped,
    // THEN recursively call function until sorting count is 0
    if ( sorting !== 0 ) {
      // // UNCOMMENT TO CONSOLE.LOG() EACH PASS
      // if (modify > 9) {
      //   console.log(`Sorting pass #${modify}:  ${arr}`);
      // } else {
      //   console.log(`Sorting pass  #${modify}:  ${arr}`);
      // }

      bubbleSort( arr, sorting );
    }
  }
  // return sorted array
  return arr;
};

// TEST SUITE
// BASIC SORTING OF THE NATURAL NUMBERS
const test1 = [ 2, 1, 3 ];
console.log( `TEST #1 UNSORTED:  ${test1}` );
console.log( `TEST #1   SORTED:  ${bubbleSort(test1)}\n` );
// ---> [ 1, 2, 3 ]

const test2 = [ 3, 2, 1, 3, 1, 5, 4, 3 ];
console.log( `TEST #2 UNSORTED:  ${test2}` );
console.log( `TEST #2   SORTED:  ${bubbleSort(test2)}\n` );
// ---> [ 1, 1, 2, 3, 3, 3, 4, 5 ]

const test3 = [ 102345, 99, 34, 87, 135, 8, 3, 7, 99, 101, 3657, 2, 1, 5, 4, 3 ];
console.log( `TEST #3 UNSORTED:  ${test3}` );
console.log( `TEST #3   SORTED:  ${bubbleSort(test3)}\n` );
// ---> [ 1, 2, 3, 3, 4, 5, 7, 8, 34, 87, 99, 99, 101, 135, 3657, 102345 ]

// // EDGE CASE HANDLING?
// // NEGATIVE INTEGERS
// const test4 = [ 3, 2, 1, -1, 0 ]
// console.log(`TEST #4 UNSORTED:  ${test4}`);
// console.log(`TEST #4   SORTED:  ${bubbleSort(test4)}\n`);
// // ---> [ -1, 0, 1, 2, 3 ]
//
// // DECIMALS
// const test5 = [ 3.2, -2.5, 1, -1, 0.32 ]
// console.log(`TEST #5 UNSORTED:  ${test5}`);
// console.log(`TEST #5   SORTED:  ${bubbleSort(test5)}\n`);
// // ---> [ -2.5, -1, 0.32, 1, 3.2 ]
//
// // IRRATIONALS & EXPRESSIONS
// const test6 = [ Math.PI, -2.5, 1, ( Math.E - 1 ), 0.32 ]
// console.log(`TEST #6 UNSORTED:  ${test6}`);
// console.log(`TEST #6   SORTED:  ${bubbleSort(test6)}\n`);
// // ---> [ -2.5, 0.32, 1, 1.718281828459045, 3.141592653589793 ]



/*

ANALYSIS:
1. Order of complexity: Quadratic due to the recursive call to a for loop?
  - O(n^2)
2. Other edge cases?
  -     `if (current > next)` should I and how would I check for the undefined value of array[n + 1]?
3. This algorithm modifies the original array. How to not alter the original?
  - let sorting = arr.slice(0);
  - Tried this and replacing subsequent arr variables, but it made an unending loop?
  - slice makes a non destructive copy... WHY? OH, WHY??????
    ```console
    $  node
      > x = [1, 2, 3, 4]
      [ 1, 2, 3, 4 ]
      > y = x.slice(0)
      [ 1, 2, 3, 4 ]
      > y[1] = 99
      99
      > x
      [ 1, 2, 3, 4 ]
      > y
      [ 1, 99, 3, 4 ]
    ```
  - splice made it so nothing returns... :\

*/
