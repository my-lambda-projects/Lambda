// cc31 fizzBuzzTesting
const fizzBuzzScript = require( '../src/fizzbuzz' );
const assert = require( 'chai' ).assert;
const chai = require( 'chai' );
const sinon = require( 'sinon' );

const expect = chai.expect;

/* global describe it */
describe( 'FizzBuzz Test', () => {
  const fizzBuzz = fizzBuzzScript.fizzBuzz;

  describe( '#1: fizzBuzz imports from the script file and ', () => {
    it( 'should be a function', () => {
      assert.typeOf( fizzBuzz, 'function' );
      expect( fizzBuzz ).to.be.a( 'function' );
    } );
  } );

  describe( '#2: fizzBuzz returns correct value types,', () => {
    it( 'should return a `String` when conditions are met', () => {
      assert.typeOf( fizzBuzz( 15 ), 'string' );
      assert.typeOf( fizzBuzz( 9 ), 'string' );
      assert.typeOf( fizzBuzz( 10 ), 'string' );
      expect( fizzBuzz( 15 ) ).to.be.a( 'string' );
      expect( fizzBuzz( 9 ) ).to.be.a( 'string' );
      expect( fizzBuzz( 10 ) ).to.be.a( 'string' );
    } );
    it( 'should return a `Number` when conditions are not met', () => {
      assert.typeOf( fizzBuzz( 4 ), 'number' );
      expect( fizzBuzz( 4 ) ).to.be.a( 'number' );
    } );
    it( 'should return the given argument when conditions are not met', () => {
      assert.equal( fizzBuzz( 44 ), 44 );
      assert.equal( fizzBuzz( 'x' ), 'x' );
      assert.equal( fizzBuzz( true ), true );
      expect( fizzBuzz( 44 ) ).equals( 44 );
      expect( fizzBuzz( 'x' ) ).equals( 'x' );
      expect( fizzBuzz( true ) ).equals( true );
    } );
  } );

  describe( '#3: fizz', () => {
    it( 'should return `fizz` when the argument % 3 === 0', () => {
      assert.equal( fizzBuzz( 6 ), 'fizz' );
      expect( fizzBuzz( 9 ) ).to.equal( 'fizz' );
    } );
  } );

  describe( '#4: buzz', () => {
    it( 'should return `buzz` when the argument % 5 === 0', () => {
      assert.equal( fizzBuzz( 10 ), 'buzz' );
      expect( fizzBuzz( 10 ) ).to.equal( 'buzz' );
    } );
  } );

  describe( '#5: fizzbuzz', () => {
    it( 'should return `fizzbuzz` when the argument % 3 ===0 && % 5 === 0', () => {
      assert.equal( fizzBuzz( 15 ), 'fizzbuzz' );
      expect( fizzBuzz( 15 ) ).to.equal( 'fizzbuzz' );
    } );
  } );
} );
