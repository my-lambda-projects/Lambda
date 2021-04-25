// from the lecture video: https://youtu.be/F0y2sJHQzzs
const largestPrimePalindrome = ( number ) => {

  const palindromeChecker = ( number ) => {
    const strNum = number.toString();
    const reversedStrNum = strNum.split( '' ).reverse().join( '' );
    if ( strNum == reversedStrNum ) return true; // <--- NOTE THE USE OF "==" (NOT "==="): COERCION
    // if (strNum === Number(reversedStrNum)) return true;
    return false;
  };

  const primeChecker = ( num ) => {
    const squareRoot = Math.sqrt( num );
    if ( num % 2 === 0 ) return false;
    for ( let i = 3; i <= squareRoot; i += 2 ) {
      if ( num % i === 0 ) return false;
    }
    return true;
  };

  // COUNTING DOWN FROM LARGEST IS MUCH MUCH MUCH FASTER
  for ( let num = 1000; num >= 11; num-- )
    if ( palindromeChecker( num ) && primeChecker( num ) ) return num;

};

console.log( largestPrimePalindrome() );
