const allAnagrams = ( str, start = '' ) => {
  if ( str.length === 1 ) return [ start + str ];
  const anagrams = [];

  for ( let i = 0; i < str.length; i++ ) {
    const result = allAnagrams( str.substr( 0, i ) + str.substr( i + 1 ), str[ i ] );
    for ( let j = 0; j < result.length; j++ ) {
      anagrams.push( start + result[ j ] );
    }
  }
  return anagrams;
};
