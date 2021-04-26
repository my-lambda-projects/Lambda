const closureMethods = require( '../src/closure' );
/* eslint-disable no-undef */
describe( 'closure', () => {
  describe( 'counter', () => {
    it( 'should return a function', () => {
      expect( typeof closureMethods.counter() ).toBe( 'function' );
    } );
    it( 'should return 1 when the returned function is invoked', () => {
      expect( closureMethods.counter()() ).toBe( 1 );
    } );
    it( 'should increment and return the number each time the function is invoked', () => {
      const counterFunction = closureMethods.counter();
      expect( counterFunction() ).toBe( 1 );
      expect( counterFunction() ).toBe( 2 );
      expect( counterFunction() ).toBe( 3 );
      expect( counterFunction() ).toBe( 4 );
      expect( counterFunction() ).toBe( 5 );
    } );
  } );

  describe( 'counterFactory', () => {
    it( 'should return an object with an increment method and a decrement method', () => {
      expect( typeof closureMethods.counterFactory().increment ).toBe( 'function' );
      expect( typeof closureMethods.counterFactory().decrement ).toBe( 'function' );
    } );
    it( 'should have a working increment method that increments the private counter and returns the new value', () => {
      const counter = closureMethods.counterFactory();
      expect( counter.increment() ).toBe( 1 );
      expect( counter.increment() ).toBe( 2 );
      expect( counter.increment() ).toBe( 3 );
      expect( counter.increment() ).toBe( 4 );
    } );
    it( 'should have a working decrement method that decrements the private counter and returns the new value', () => {
      const counter = closureMethods.counterFactory();
      expect( counter.decrement() ).toBe( -1 );
      expect( counter.decrement() ).toBe( -2 );
      expect( counter.decrement() ).toBe( -3 );
      expect( counter.decrement() ).toBe( -4 );
    } );
  } );

  describe( 'limitFunctionCallCount', () => {
    it( 'should return a function', () => {
      expect( typeof closureMethods.limitFunctionCallCount() ).toBe( 'function' );
    } );
    it( 'should return a wrapped version of the original function that can only be invoked n times', () => {
      const foo = () => ( true );
      const limitedFunction = closureMethods.limitFunctionCallCount( foo, 2 );
      expect( limitedFunction() ).toBe( true );
      limitedFunction();
      expect( limitedFunction() ).toBe( null );
    } );
    it( 'should properly handle arguments in the wrapped function', () => {
      const foo = ( x, y, z ) => ( x + y + z );
      const limitedFunction = closureMethods.limitFunctionCallCount( foo, 2 );
      expect( limitedFunction( 5, 10, 15 ) ).toBe( 30 );
      limitedFunction( 0, 0, 0 );
      expect( limitedFunction() ).toBe( null );
    } );
  } );

  describe( 'cacheFunction', () => {
    it( 'should return a function', () => {
      expect( typeof closureMethods.cacheFunction() ).toBe( 'function' );
    } );
    it( 'The cached function should return the correct result', () => {
      const foo = x => ( x * x );
      const cachedFunction = closureMethods.cacheFunction( foo );
      expect( cachedFunction( 5 ) ).toBe( 25 );
    } );
    it( 'should cache function results and not rerun the original callback if the same arguments are presented', () => {
      const foo = jest.fn();
      const cachedFunction = closureMethods.cacheFunction( foo );
      cachedFunction( true );
      cachedFunction( true );
      cachedFunction( true );
      cachedFunction( true );
      cachedFunction( true );
      cachedFunction( 10 );
      cachedFunction( 10 );
      cachedFunction( 10 );
      cachedFunction( 10 );
      cachedFunction( 10 );
      expect( foo ).toHaveBeenCalledTimes( 2 );
    } );
  } );
} );
