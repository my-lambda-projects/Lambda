class ArrayADT {
  constructor() {
    this.array = [];
  }

  add( data ) {
    this.array.push( data );
  }

  remove( data ) {
    this.array = this.array.filter( ( current ) => current !== data );
  }

  search( data ) {
    const foundIndex = this.array.indexOf( data );
    if ( foundIndex === -1 ) {
      return foundIndex;
    }

    return null;
  }

  getAtIndex( index ) {
    return this.array[ index ];
  }

  length() {
    return this.array.length;
  }

  print() {
    console.log( this.array.join( ' ' ) );
  }
}

const array = new ArrayADT();
console.log( 'const array = new ArrayADT();: ', array );
console.log( '-------------------------------' );

console.log( 'array.add(1): ', array.add( 1 ) );
array.add( 3 );
array.add( 4 );
console.log(
  'array.add(2);: ',
  array.add( 2 ),
  'array.add(3);',
  array.add( 3 ),
  'array.add(4); ',
  array.add( 4 )
);

console.log( '-------------------------------' );
array.print();
console.log( '-------------------------------' );

console.log( 'search 3 gives index 2:', array.search( 3 ) );
console.log( '-------------------------------' );

console.log( 'getAtIndex 2 gives 3:', array.getAtIndex( 2 ) );
console.log( '-------------------------------' );

console.log( 'length is 4:', array.length() );
console.log( '-------------------------------' );

array.remove( 3 );
array.print();
console.log( '-------------------------------' );

array.add( 5 );
array.add( 5 );
array.print();
console.log( '-------------------------------' );

array.remove( 5 );
array.print();
console.log( '-------------------------------' );
/*
     ~ final : (master) node 01-array.js
    const array = new ArrayADT();:  ArrayADT { array: [] }
    -------------------------------
    array.add(1):  undefined
    array.add(2);:  undefined array.add(3); undefined array.add(4);  undefined
    -------------------------------
    1 3 4 2 3 4
    -------------------------------
    search 3 gives index 2: null
    -------------------------------
    getAtIndex 2 gives 3: 4
    -------------------------------
    length is 4: 6
    -------------------------------
    1 4 2 4
    -------------------------------
    1 4 2 4 5 5
    -------------------------------
    1 4 2 4
    -------------------------------
     ~ final : (master)
     */