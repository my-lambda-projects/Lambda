/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

/* Take the first array item and put it in a "holding" array.
 * Compare it to the next anArray, put the bigger of the two in the holding array.
 */
const bigString = function ( anArr ) {
  const holdBig = [ anArr[ 0 ] ];
  const tie = [ 'There\'s a tie: ' ];

  for ( let i = 1; i < anArr.length; i++ ) {
    if ( holdBig[ 0 ].length < anArr[ i ].length ) {
      holdBig.pop();
      // console.log(anArr[i]);
      holdBig.push( anArr[ i ] );
    };
    // tie if length match but different string - NOPE
    // if (holdBig[0].length === anArr[i].length) {
    //   tie.push(anArr[i]);
    //   return `${tie[0]} ${tie[1]}`;
    // }
  };
  return holdBig[ 0 ];
};

testAnArray = [ 'fred', 'ted', 'bob', 'alice', 'joe', 'arnold', 'mary', 'jebedaiah', 'ed', 'zachahurres', 'mae', 'antidisestablishmentarianism' ]
console.log( bigString( testAnArray ) ); // ---> antidisestablishmentarianism

// Refactor to return an array of the equal length strings if there's a tie? √
// testAnArrayTie = ['fred', 'ted', 'bob', 'antidisestablishmentarianism', 'alice', 'joe', 'arnold', 'mary', 'jebedaiah', 'ed', 'zachahurres', 'mae', 'antidisestablishmentarianism', 'manny']
// console.log(bigString(testAnArrayTie));

// Refactor to handle non-Array arguments?
