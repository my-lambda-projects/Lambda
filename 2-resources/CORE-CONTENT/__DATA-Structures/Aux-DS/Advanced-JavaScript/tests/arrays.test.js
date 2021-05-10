const arrayMethods = require( '../src/arrays' );
/* eslint-disable no-undef */
describe( 'arrays', () => {
  describe( 'each', () => {
    it( 'should invoke cb on each array element', () => {
      let count = 0;
      arrayMethods.each( [ 1, 2, 3 ], ( element ) => {
        count += element;
      } );
      expect( count ).toBe( 6 );
    } );
    it( 'should pass the element and the index to cb', () => {
      let count = 0;
      arrayMethods.each( [ 1, 2, 3 ], ( element, index ) => {
        count += element + index;
      } );
      expect( count ).toBe( 9 );
    } );
  } );

  describe( 'map', () => {
    it( 'should return an array', () => {
      const arr = [];
      const result = arrayMethods.map( arr, n => ( n * n ) );
      expect( Array.isArray( result ) ).toBe( true );
    } );
    it( 'should pass each item into the transform function', () => {
      const arr = [ 1, 2, 3 ];
      const mappedArr = arrayMethods.map( arr, n => ( n * 2 ) );
      expect( mappedArr ).toEqual( [ 2, 4, 6 ] );
    } );
  } );

  describe( 'reduce', () => {
    it( 'should reduce the array\'s contents to a single value', () => {
      const arr = [ 1, 2, 3, 4, 5 ];
      const result = arrayMethods.reduce( arr, ( memo, num ) => ( memo + num ) );
      expect( result ).toBe( 15 );
    } );
    it( 'should accept a memo argument', () => {
      const arr = [ 1, 2, 3, 4, 5 ];
      const result = arrayMethods.reduce( arr, ( memo, num ) => ( memo + num ), 10 );
      expect( result ).toBe( 25 );
    } );
    it( 'should handle any type of data in the array', () => {
      const arr = [ 'h', 'e', 'l', 'l', 'o', '!' ];
      const result = arrayMethods.reduce( arr, ( memo, num ) => ( memo + num ) );
      expect( result ).toBe( 'hello!' );
    } );
  } );

  describe( 'find', () => {
    it( 'should return the first element that passes the truth test', () => {
      const arr = [ 1, 2, 3, 4, 5 ];
      const result = arrayMethods.find( arr, num => ( num === 5 ) );
      expect( result ).toBe( 5 );
    } );
  } );

  describe( 'filter', () => {
    it( 'should return an array', () => {
      const arr = [ 1, 2, 3, 4, 5 ];
      const results = arrayMethods.filter( arr, num => ( num === 5 ) );
      expect( Array.isArray( results ) ).toBe( true );
    } );
    it( 'should return an empty array if no elements pass truth test', () => {
      const arr = [ 1, 2, 3, 4, 5 ];
      const results = arrayMethods.filter( arr, num => ( num === 10 ) );
      expect( Array.isArray( results ) ).toBe( true );
      expect( results.length ).toBe( 0 );
    } );
    it( 'should return an array with all elements that pass truth test', () => {
      const arr = [ 1, 2, 3, 4, 5 ];
      const results = arrayMethods.filter( arr, num => ( num % 2 === 0 ) );
      expect( results[ 0 ] ).toBe( 2 );
      expect( results[ 1 ] ).toBe( 4 );
      expect( results.length ).toBe( 2 );
    } );
  } );

  describe( 'flatten', () => {
    it( 'should return an array', () => {
      const arr = [ 1, 2, 3, 4, 5 ];
      const results = arrayMethods.flatten( arr );
      expect( Array.isArray( results ) ).toBe( true );
    } );
    it( 'should return a flattened array when given a nested array', () => {
      const arr = [ 1, 2, 3, 4, 5, [ 6 ],
        [ 7 ]
      ];
      const results = arrayMethods.flatten( arr );
      expect( Array.isArray( results ) ).toBe( true );
      expect( results ).toEqual( [ 1, 2, 3, 4, 5, 6, 7 ] );
    } );
    it( 'should return a flattened array regardless of how deep the array nesting is', () => {
      const arr = [ 1, [ 2 ],
        [
          [ 3 ]
        ],
        [
          [
            [ 4 ]
          ]
        ]
      ];
      const results = arrayMethods.flatten( arr );
      expect( results ).toEqual( [ 1, 2, 3, 4 ] );
    } );
  } );
} );
/* eslint-enable no-undef */
