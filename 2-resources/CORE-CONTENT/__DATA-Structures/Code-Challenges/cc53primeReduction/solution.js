// https://youtu.be/u3p5kZtAAHY
// https://piazza.com/class/j63w1pdyopf7kj?cid=57


function primeReduction( a, b ) {
  // determine if n is prime (function)
  //   if (n < 2) return false
  //   for let i = 2; i <= Math.sqrt(n); i++
  //     if (n % i === 0) return false;
  //   return true;
  //
  // create array to help determine below
  // let arr = [];
  // determine if number goes into a loop (function)
  //   if (arr.includes(n)) {
  //       arr.length = 0;
  //       return false;
  //   }
  //   if (n === 1) {
  //     arr.length = 0;
  //     return true;
  //   }
  //   arr.push(n);
  //   let hold = 0;
  //   let num = n;
  //   while num > 0
  //     hold += Math.pow(num % 10, 2);
  //     num -= num % 10;
  //     num /= 10;
  //   return reduction(hold);
  //
  // let count = 0
  // for let i = a; i < b; i++
  //   if isPrime(i)
  //     if reduction(i)
  //       count++
  // return count
  function isPrime( n ) {
    if ( n < 2 ) return false;
    for ( let i = 2; i <= Math.sqrt( n ); i++ )
      if ( n % i === 0 ) return false;
    return true;
  }
  const arr = [];

  function reduction( n ) {
    if ( arr.includes( n ) ) {
      arr.length = 0;
      return false;
    }
    if ( n === 1 ) {
      arr.length = 0;
      return true;
    }
    arr.push( n );
    let hold = 0;
    let num = n;
    while ( num > 0 ) {
      hold += Math.pow( num % 10, 2 );
      num -= num % 10;
      num /= 10;
    }
    return reduction( hold );
  }
  let count = 0;
  for ( let i = a; i < b; i++ )
    if ( isPrime( i ) )
      if ( reduction( i ) ) count++;
  return count;
}
