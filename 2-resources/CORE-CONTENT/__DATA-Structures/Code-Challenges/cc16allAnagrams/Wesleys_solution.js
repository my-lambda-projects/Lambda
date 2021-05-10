class Anagram {
  constructor( string, letter = null ) {
    this.string = string;
    this.letter = letter;
    this.children = [];
    this.answer = [];
    this.divide();
    this.produce();
  }

  divide() {
    const arr = this.string.split( '' );
    arr.forEach( l => {
      const rest = arr.filter( x => x !== l ).join( '' );
      const anagram = new Anagram( rest, l );
      this.children.push( anagram );
    } );
  }

  produce( a = this, b = null ) {
    if ( a.letter ) {
      b = b ? b.concat( a.letter ) : a.letter;
    }
    if ( a.children.length ) {
      a.children.forEach( aa => {
        return this.produce( aa, b ? b : null )
      } );
      return this.answer;
    }
    this.answer.push( b );
  }
}

function allAnagrams( s ) {
  return ( new Anagram( s ) ).answer;
}

const anagrams = allAnagrams( 'abcdefghi' );
console.log( anagrams );
