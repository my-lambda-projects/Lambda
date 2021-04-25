// https://repl.it/student/assignments/395908/model_solution?fromSubmissionId=1559885
// https://youtu.be/wNPKVuKBWxo

function isTwinPrime( n ) {
  function isPrime( num ) {
    for ( let i = 2; i <= Math.sqrt( num ); i++ ) {
      console.log( `${num} % ${i} === not zero` );
      if ( num % i === 0 ) return false;
    }
    return num >= 2;
  }
  return ( isPrime( n ) && ( isPrime( n - 2 ) || isPrime( n + 2 ) ) );
}

console.log( `the sqaure root of 119 is ${Math.sqrt(119)}` );
console.log( isTwinPrime( 119 ) );
