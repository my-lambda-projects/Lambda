// https://youtu.be/lcTbfgMlNNE
// https://piazza.com/class/j63w1pdyopf7kj?cid=55

function checkString( str1, str2, str3 ) {
  if ( str3.length === 0 ) return true;
  if ( ( str1.length + str2.length ) !== str3.length ) return false;
  const shorterStr3 = str3.substr( 1 );
  if ( str1[ 0 ] === str3[ 0 ] ) {
    if ( str2[ 0 ] === str3[ 0 ] ) {
      return checkString( str1.substr( 1 ), str2, shorterStr3 ) || checkString( str1, str2.substr( 1 ), shorterStr3 );
    }
    return checkString( str1.substr( 1 ), str2, shorterStr3 );
  }
  if ( str2[ 0 ] === str3[ 0 ] ) {
    return checkString( str1, str2.substr( 1 ), shorterStr3 );
  }
  return false;
}
