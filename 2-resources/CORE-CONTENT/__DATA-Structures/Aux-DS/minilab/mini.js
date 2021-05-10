'use-strict';
/* eslint no-console: 0 */
/******************************************************************************
 * Mini lab
 * Write code in your language of choice to generate all permutations of the following sets:
 * (1, 2, 3)
 * ('a', 'b', 'c', 'd')
 * ('corn', 'turkey', 'winter', 'algebra', 'window')
 * e.g.
 * !3: 123, 132, 213, 231, 312, 321                    = 6 permutations
 * !4: abcd, abdc, acbd, acdb, adbc, adcb, etc...      = 24 permutations
 * !5: (corn, turkey, winter, algebra, window),
 *     (corn, turkey, winter, window, algebra), etc... = 120 permutations
 ******************************************************************************/

const perm = ( ...args ) => {
  if ( args.length === 0 ) {
    return 'Ya gots to enter some args, bruh!';
  } else if ( args.length === 1 ) {
    return args;
  }
  const result = [];
  const permute = ( arr, memo = [] ) => {
    // console.log('\narray at the beginnning: ', arr);
    let i, current;
    for ( i = 0; i < arr.length; i++ ) {
      current = arr.splice( i, 1 );
      // console.log('current = ', current, '[i] = ', i);
      if ( arr.length === 0 ) {
        // console.log('result before = ', result);
        result.push( memo.concat( current ) );
        // console.log('result after = ', result);
      }
      permute( arr.slice(), memo.concat( current ) );
      arr.splice( i, 0, current[ 0 ] );
      // console.log('array after permute() = ', arr);
    }
    return result;
  };
  return permute( args );
};

// console.log(perm());
// console.log(perm('Scooby Snacks'));
// console.log(perm(1, 2, 3));
console.log( perm( 0, 1, 2, 3 ) );
// console.log(perm('a', 'b', 'c', 'd'));
// console.log(perm('corn', 'turkey', 'winter', 'algebra', 'window'));
// console.log(perm(['Jesh', 'does', 'not', 'share', 'candy']));


// const allAnagrams = (str, start = '') => {
//   if (str.length === 1) return [start + str];
//   const anagrams = [];
//
//   for (let i = 0; i < str.length; i++) {
//     const result = allAnagrams(str.substr(0, i) + str.substr(i + 1), str[i]);
//     for (let j = 0; j < result.length; j++) {
//       anagrams.push(start + result[j]);
//     }
//   }
//   return anagrams;
// };
//
// console.log(allAnagrams('abcd'));
