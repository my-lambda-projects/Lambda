// c20 parallel

'use strict';

/* Implement the function parallel:
 *
 * Parallel has two parameters, an array of asynchronous functions (tasks) and a callback. - OKAY √
 * Each of the tasks takes a callback and invokes that callback when complete. - OKAY √
 *
 * The callback passed to parallel is then performed on the results of the callbacks of the tasks. - Umm, okay?
 *
 * The order of these results should be the same as the order of the tasks. - Okay...
 * It is important to note that this is not the order in which the tasks return, - I see the Timeout durations
 * but the order in which they are passed to parallel. - Alright...
 *
 * Once all the callbacks of the tasks are returned, parallel should invoke the callback
 * on the results array. - OKAY√
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
 *   console.log(results); // ['one', 'two']
 * });
 *
 *
 */

// // uhh....
// const parallel = (...args, cb) => {
//   return (cb(args));
// }

// const parallel = (cb, ...args) => {
//   return (cb(args));
// }

const parallel = ( cb, ...args ) => {
  return ( args( cb ) );
}


// parallel(
//   // PARAMETER 1
//   [ function(callback){
//       setTimeout(function() { callback('one'); }, 200);
//     },
//     function(callback){
//       setTimeout(function() { callback('two'); }, 100);
//     }],
//   // PARAMETER 2 - optional callback
//   // the results array will equal ['one','two'] even though
//   // the second function had a shorter timeout.
//   (results) => { console.log(results); } // ~~> ['one', 'two']
// );

parallel(
  // PARAMETER 2 - optional callback
  // the results array will equal ['one','two'] even though
  // the second function had a shorter timeout.
  ( results ) => {
    console.log( results );
  } // ~~> ['one', 'two']
  ,
  // PARAMETER 1
  [ function ( callback ) {
      setTimeout( function () {
        callback( 'one' );
      }, 200 );
    },
    function ( callback ) {
      setTimeout( function () {
        callback( 'two' );
      }, 100 );
    }
  ]
);
