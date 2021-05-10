// Complete the following functions.

const nFibonacci = ( n ) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  // 1,   2,   3,   5,   8,   13,  21,  34,  etc... (Fibbonacci values)
  // 1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, etc... [position, nth Fibbo #]

  // version 1 √
  if ( n < 2 ) return 1; // <--------------------------- ***BASE CASE***
  return nFibonacci( n - 2 ) + nFibonacci( n - 1 ); // <--- recursive call

  // // version 1.1 - ternary √
  // return (n < 2) ? 1 : nFibonacci(n - 2) + nFibonacci(n - 1);

  // // version 2 - non-recursive √
  // const fibArray = [1, 1];
  // for (let i = 2; i <= n; i++) {
  //   fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
  // }
  // return fibArray[n];
};

const nFactorial = ( n ) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`

  // // version 1 √
  if ( n === 1 ) return n;
  return n * nFactorial( n - 1 );

  // // version 2: ternary solution √
  // // declare variableName = ifCondition ? thenThis : otherwiseThat;
  // const factorial = (n === 1) ? 1 : n * nFactorial(n - 1);
  // return factorial;

  // // version 2.1 √
  // return (n === 1) ? n : n * nFactorial(n - 1);

  // // version 3 non-recursive
  // function nFactorial (num) {
  //   let factorial = 1;
  //   for (let i = 1; i <= num; i++) {
  //     factorial *= i;
  //   }
  //   return factorial;
  // }
};

const checkMatchingLeaves = ( obj ) => {
  //                                             { key: value, key:  vv value vv }
  // INPUT: will either be a number or an object {   x:   1  ,   y: {key: value} }
  //                                             typeof obj[y] >>> 'object'
  // FUNCTION:
  // leafValue
  // recursive function()
  // iterate over the keys on obj
  // find first non object value         vvv    recursion    vvv
  // if object[key] is an object, then checkMatchingLeaves(obj[key])
  // if leafValue is undefined set it to obj[key]
  // check if leafValue is equal to obj[key] - otherwise return false
  // DEPTH FIRST SEARCH with recursion
  // call recursive function()
  // OUTPUT: return true if every property on `obj` is the same
  // otherwise return false

  // version 1 √
  // example nested object: const tree = { x: 1, y: 1, z: 1, xa: { xx: 1, xy: 1, xz: 1, zz: { a: { b: { z: 1, }, }, }, y: 2 }, };
  // const tree1 = {
  //   x: 1,
  //   y: 1,
  //   z: 1,
  //   xa: {
  //     xx: 1,
  //     xy: 1,
  //     xz: 1,
  //     zz: {
  //       a: {
  //         b: {
  //           z: 1,
  //         },
  //       },
  //     },
  //     y: 2
  //   },
  // };

  // version 1 - Ben's solution √
  let leafValue;
  let leavesMatch = true;
  const checkLeaf = ( object ) => {
    Object.keys( object ).forEach( ( key ) => {
      // if (leafValue === undefined && typeof key !== 'object') {
      if ( leafValue === undefined && key instanceof Object !== true ) {
        leafValue = object[ key ];
        return undefined;
      }
      // if (typeof object[key] === 'object') return checkLeaf(object[key]); // <--- recursive
      if ( object[ key ] instanceof Object === true ) return checkLeaf( object[ key ] ); // <--- recursive
      if ( object[ key ] !== leafValue ) {
        leavesMatch = false;
        return undefined;
      }
      return undefined;
    } );
  };
  checkLeaf( obj );
  return leavesMatch;
};


/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
