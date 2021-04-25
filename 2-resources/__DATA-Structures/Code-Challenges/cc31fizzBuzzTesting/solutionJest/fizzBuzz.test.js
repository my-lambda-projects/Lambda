// cc31 fizzBuzzTesting
const fizzBuzz = require( '../fizzBuzz' );

/* global describe it expect */
describe( 'fizzbuzz', () => {
  it( 'should return fizzbuzz when the number is divisible by 3 and 5', () => {
    expect( fizzBuzz( 15 ) ).toEqual( 'fizzbuzz' );
    expect( fizzBuzz( 30 ) ).toEqual( 'fizzbuzz' );
  } );
  it( 'should return fizz when the number is divisible by 3 only', () => {
    expect( fizzBuzz( 3 ) ).toEqual( 'fizz' );
    expect( fizzBuzz( 12 ) ).toEqual( 'fizz' );
    expect( fizzBuzz( 24 ) ).toEqual( 'fizz' );
  } );
  it( 'should return buzz when the number is divisible by 5 only', () => {
    expect( fizzBuzz( 20 ) ).toEqual( 'buzz' );
    expect( fizzBuzz( 25 ) ).toEqual( 'buzz' );
    expect( fizzBuzz( 40 ) ).toEqual( 'buzz' );
  } );
  it( 'should return the number when the number is not divisible by 3 or 5', () => {
    expect( fizzBuzz( 22 ) ).toEqual( 22 );
    expect( fizzBuzz( 26 ) ).toEqual( 26 );
    expect( fizzBuzz( 41 ) ).toEqual( 41 );
  } );
} );
