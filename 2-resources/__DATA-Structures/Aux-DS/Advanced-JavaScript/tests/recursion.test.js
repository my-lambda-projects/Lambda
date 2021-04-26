const recursiveMethods = require( '../src/recursion' );
/* eslint-disable no-undef */
describe( 'recursion', () => {
  describe( 'nFibonacci', () => {
    it( 'should return the nth fibonacci number', () => {
      const fib1 = recursiveMethods.nFibonacci( 5 );
      const fib2 = recursiveMethods.nFibonacci( 3 );
      const fib3 = recursiveMethods.nFibonacci( 1 );
      expect( fib1 ).toBe( 8 );
      expect( fib2 ).toBe( 3 );
      expect( fib3 ).toBe( 1 );
    } );
  } );

  describe( 'nFactorial', () => {
    it( 'should return the factorial of a given number', () => {
      const factorial1 = recursiveMethods.nFactorial( 5 );
      const factorial2 = recursiveMethods.nFactorial( 3 );
      expect( factorial1 ).toBe( 120 );
      expect( factorial2 ).toBe( 6 );
    } );
  } );

  describe( 'checkMatchingLeaves', () => {
    it( 'should check if all leaves match', () => {
      const tree1 = {
        x: 1,
        y: 1,
        z: 1,
      };
      const tree2 = {
        x: 1,
        y: 1,
        z: 2,
      };
      expect( recursiveMethods.checkMatchingLeaves( tree1 ) ).toBe( true );
      expect( recursiveMethods.checkMatchingLeaves( tree2 ) ).toBe( false );
    } );

    it( 'should check nested objects', () => {
      const tree1 = {
        x: 1,
        y: 1,
        z: 1,
        xa: {
          xx: 1,
          xy: 1,
          xz: 1,
          zz: {
            a: {
              b: {
                z: 1,
              },
            },
          },
        },
      };
      const tree2 = {
        x: 1,
        y: 1,
        z: 1,
        xa: {
          xx: 1,
          xy: 1,
          xz: 1,
          zz: {
            a: {
              b: {
                z: 2,
              },
            },
          },
        },
        r: 1,
      };
      expect( recursiveMethods.checkMatchingLeaves( tree1 ) ).toBe( true );
      expect( recursiveMethods.checkMatchingLeaves( tree2 ) ).toBe( false );
    } );
  } );
} );

/* eslint-enable no-undef */
