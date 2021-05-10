// const parallel = (arrayOfFunctions, cb) => {
//   // create a new array
//   // get length of functionsArray
//   // use forEach with arrow function param (func, i)
//     // invoke each func with arrow function param (value)
//     // subtract one from functionsArray length
//     // if funArray.length === 0, cb(new array)
//
//   const values = [];
//   let remainingItems = arrayOfFunctions.length;
//   arrayOfFunctions.forEach((func, i) => {
//     func((value) => {
//       values[i] = values;
//       remainingItems--;
//       if (remainingItems === 0) cb(values);
//     });
//   });
// };


'use strict';

/* Implement the function parallel:
 *
 * Parallel has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a callback and invokes that callback when complete.
 *
 * The callback passed to parallel is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to parallel.
 *
 * Once all the callbacks of the tasks are returned, parallel should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * parallel([
 *  function(callback){
 *    setTimeout(function(){
 *      callback('one');
 *    }, 200);
 *  },
 *  function(callback){
 *    setTimeout(function(){
 *      callback('two');
 *    }, 100);
 *  }
 * ],
 *  // optional callback
 *  (results) => {
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
      console.log(results); // ['one', 'two']
 * });
 *
 *
 */

const parallel = ( functions, cb ) => {
  // create a new array
  // get length of functionsArray
  // use forEach with arrow function params (func, i)
  // invoke each func with arrow function param (value)
  // subtract one from functionsArrayLength
  // if functionsArrayLength === 0, cb(newArray)
  const values = [];
  let remainingItems = functions.length;
  functions.forEach( ( func, i ) => {
    func( ( value ) => {
      values[ i ] = value;
      remainingItems--;
      if ( remainingItems === 0 ) cb( values );
    } );
  } );
};

const paraArr = [
  function ( callback ) {
    setTimeout( function () {
      callback( 'one' );
    }, 200 );
  },
  function ( callback ) {
    setTimeout( function () {
      callback( 'two' );
    }, 100 );
  }
];
const cbFun = ( results ) => {
  // the results array will equal ['one','two'] even though
  // the second function had a shorter timeout.
  console.log( results ); // ['one', 'two']
};
parallel( paraArr, cbFun );
