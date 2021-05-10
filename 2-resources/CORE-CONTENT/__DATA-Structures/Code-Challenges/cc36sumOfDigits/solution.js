function sumOfDigits( num ) {
  const digits = ( num + '' ).split( '' ).map( num => parseInt( num ) );
  const sum = digits.reduce( ( sum, n ) => sum + n );
  return sum;
}
