// https://piazza.com/class/j63w1pdyopf7kj?cid=44
// https://youtu.be/iI-h7_L7Lnc

const phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

function telephoneWords( numberStr ) {
  const words = [];

  function innerRecurse( currentWord, index ) {
    // base case
    if ( currentWord.length === numberStr.length ) {
      words.push( currentWord );
      return;
    }
    // grab current letters for the current number we're looking at from number string
    const currentLetters = phoneDigitsToLetters[ numberStr[ index ] ];
    for ( let i = 0; i < currentLetters.length; i++ ) {
      innerRecurse( currentWord + currentLetters[ i ], index++ );
    }
  }
  innerRecurse( '', 0 );
  return words;
}

console.log( telephoneWords( 45 ) );
