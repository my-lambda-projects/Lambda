// 'abcDEF' -> 'ABCdef'
// 'Hello World' -> 'hELLO wORLD'

// split the string into an array
// iterate over the array
// if character is uppercase flip it to lowercase
// make lowercase character uppercase
// join the array back into a string
// return the string

const reverseCase = ( str ) => {
  const characters = str.split( '' );
  characters.forEach( ( character, i ) => { // 'A' === 'A'
    if ( character.toUpperCase() === character ) {
      characters[ i ] = character.toLowerCase();
    } else {
      characters[ i ] = character.toUpperCase();
    }
  } );
  return characters.join( '' );
};

console.log( reverseCase( 'Hello World' ) );
