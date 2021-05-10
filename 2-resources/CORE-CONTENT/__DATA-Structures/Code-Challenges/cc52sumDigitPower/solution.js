//
//

function sumDigPower( a, b ) {
  const arr = [];

  function check( n ) {
    const str = n.toString();
    let ans = 0;
    for ( let i = 0; i < str.length; i++ ) {
      ans += Math.pow( str[ i ], i + 1 );
    }
    return ans === n;
  }
  for ( let i = a; i <= b; i++ ) {
    if ( check( i ) ) arr.push( i );
  }
  return arr;
}
