let countChange = function ( money, coins ) {
  function countChangeSub( money, coins, n ) {
    if ( money == 0 ) return 1;
    if ( money < 0 || coins.length == n ) return 0;
    let countSubArr = countChangeSub( money - coins[ n ], coins, n ) + countChangeSub( money, coins, n + 1 );
    return countSubArr;
  }
  return countChangeSub( money, coins, 0 );
}

console.log( 'countChange(23,[1,2,5]): ', countChange( 23, [ 1, 2, 5 ] ) ); //countChange(23,[1,2,5]):  36
;

function waysToReturnChange( denominations, numOfCoins, amount ) {
  if ( amount === 0 ) return 1; // Perfect!
  if ( amount < 0 ) return 0; // No solution exists for negative amount
  if ( numOfCoins < 0 && amount > 0 ) return 0; // We don't have coins left!
  console.log( `checking ways to make ${ amount } with ${ denominations.slice( numOfCoins ) }` );
  return waysToReturnChange( denominations, numOfCoins, amount - denominations[ numOfCoins ] ) +
    waysToReturnChange( denominations, numOfCoins - 1, amount );
}

function waysToReturnMemoize( amount, denominations ) {
  // intialize an array of zeros with indices up to amount
  var waysOfDoingNcents = [];
  for ( var i = 0; i <= amount; i++ ) {
    waysOfDoingNcents[ i ] = 0;
  }
  // there is 1 way to renturn 0 cents
  waysOfDoingNcents[ 0 ] = 1;
  for ( var j = 0; j < denominations.length; j++ ) {
    //  can only start returning change with coins in our denominations
    var coin = denominations[ j ];
    //  start bottom up, each time reducing change amout with curr coin.
    for ( var higherAmount = coin; higherAmount <= amount; higherAmount++ ) {
      var higherAmountRemainder = higherAmount - coin;
      // ways to create change is equivalent to reducing the problem to a known problem
      // and gaining all the ways to solve for smaller problems
      waysOfDoingNcents[ higherAmount ] += waysOfDoingNcents[ higherAmountRemainder ];
    }
  }
  return waysOfDoingNcents[ amount ];
}
var denominations = [ 1, 2, 3 ];
var amount = 4;
console.time( "answer time" );
console.log( waysToReturnChange( denominations, denominations.length - 1, amount ) );
console.timeEnd( "answer time" );
console.time( "answer time1" );
console.log( waysToReturnMemoize( amount, denominations ) );
console.timeEnd( "answer time1" );

;
let makeChange = function ( total ) {

  let coins = [ 1, 2, 5, 10, 20, 50, 100, 200 ];
  let count = 0;
  //Had to use var to escape block scope
  for ( var a = total; a >= 0; a -= coins[ coins.length - 1 ] ) {
    for ( var b = a; b >= 0; b -= coins[ coins.length - 2 ] ) {
      for ( var c = b; c >= 0; c -= coins[ coins.length - 3 ] ) {
        for ( var d = c; d >= 0; d -= coins[ coins.length - 4 ] ) {
          for ( var e = d; e >= 0; e -= coins[ coins.length - 5 ] ) {
            for ( var f = e; f >= 0; f -= coins[ coins.length - 6 ] ) {
              for ( var g = f; g >= 0; g -= coins[ coins.length - 7 ] ) {
                count++;
              }
            }
          }
        }
      }
    }
  }
  return count;
};


console.log( 'makeChange(200): ', makeChange( 200 ) ); //makeChange(200):  73682;





function binarySearch( array, target ) {
  if ( !array.length ) return false;
  let mid = Math.floor( array.length / 2 );
  if ( array[ mid ] === target ) return true;
  if ( target < array[ mid ] ) {
    return binarySearch( array.slice( 0, mid ), target );
  } else {
    return binarySearch( array.slice( mid + 1 ), target );
  }
}

function binarySearchIndex( array, target ) {
  if ( !array.length ) return -1;
  let mid = Math.floor( array.length / 2 );
  if ( array[ mid ] === target ) return mid;
  if ( target < array[ mid ] ) {
    return binarySearchIndex( array.slice( 0, mid ), target );
  } else {
    const res = binarySearchIndex( array.slice( mid + 1 ), target );
    return res === -1 ? res : mid + 1 + res;
  }
}

console.log( `------------------ when the target is contained in the array----------should return true--------------------` )
binarySearch( [ 5, 10, 12, 15, 20, 30, 70 ], 12 );
console.log( 'binarySearch( [ 5, 10, 12, 15, 20, 30, 70 ], 12 ): ', binarySearch( [ 5, 10, 12, 15, 20, 30, 70 ], 12 ) );

binarySearch( [ 1, 2, 2, 3 ], 1 )
console.log( 'binarySearch( [ 1, 2, 2, 3 ], 1 ): ', binarySearch( [ 1, 2, 2, 3 ], 1 ) );


console.log( `------------------ when the target is contained in the array----------should return the index of where the target is found--------------------` )

binarySearch( [ 5, 10, 12, 15, 20, 30, 70 ], 24 )
console.log( 'binarySearch( [ 5, 10, 12, 15, 20, 30, 70 ], 24 ): ', binarySearch( [ 5, 10, 12, 15, 20, 30, 70 ], 24 ) );
( binarySearch( [], 3 ) )
console.log( '  ( binarySearch( [], 3 ) ): ', ( binarySearch( [], 3 ) ) );
console.log( '----------------it should accept an sorted array of unique numbers and a target as an arg--------------------------------' )

binarySearchIndex( [ 5, 10, 12, 15, 20, 30, 70 ], 12 )
console.log( 'binarySearchIndex( [ 5, 10, 12, 15, 20, 30, 70 ], 12 ): ', binarySearchIndex( [ 5, 10, 12, 15, 20, 30, 70 ], 12 ) );
binarySearchIndex( [ 1, 2, 3 ], 1 )
console.log( 'binarySearchIndex( [ 1, 2, 3 ], 1 ): ', binarySearchIndex( [ 1, 2, 3 ], 1 ) );
binarySearchIndex( [ 1, 2, 3 ], 2 )
console.log( 'binarySearchIndex( [ 1, 2, 3 ], 2 ): ', binarySearchIndex( [ 1, 2, 3 ], 2 ) );

console.log( `--------------------when the target is not contained in the array-------------should return -1 ---------------` );
binarySearchIndex( [ 5, 10, 12, 15, 20, 30, 70 ], 24 )
console.log( 'binarySearchIndex( [ 5, 10, 12, 15, 20, 30, 70 ], 24 ): ', binarySearchIndex( [ 5, 10, 12, 15, 20, 30, 70 ], 24 ) );
binarySearchIndex( [], 3 )
console.log( 'binarySearchIndex( [], 3 ): ', binarySearchIndex( [], 3 ) );;
