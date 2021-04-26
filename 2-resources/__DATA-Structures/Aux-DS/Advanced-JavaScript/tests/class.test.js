const {
  User,
  Cat
} = require( '../src/class' );

/* eslint-disable no-undef */
describe( 'classes', () => {
  describe( 'User', () => {
    it( 'should be a valid JS class', () => {
      expect( typeof User ).toBe( 'function' );
      expect( Array.isArray( new User( {} ) ) ).toBe( false );
      expect( typeof new User( {} ) ).toBe( 'object' );
    } );

    it( 'should set an email and password property from the provided options object', () => {
      const user = new User( {
        email: 'ben@lambdaschool.com',
        password: 'correcthorsebatterystaple'
      } );
      expect( user.email ).toBe( 'ben@lambdaschool.com' );
      expect( user.password ).toBe( 'correcthorsebatterystaple' );
      expect( Object.keys( user ).length ).toBe( 2 );
    } );

    it( 'should have a working comparePasswords method that returns a boolean value', () => {
      const user = new User( {
        email: 'ben@lambdaschool.com',
        password: 'correcthorsebatterystaple'
      } );

      expect( typeof user.comparePasswords ).toBe( 'function' );
      expect( user.comparePasswords( 'sup' ) ).toBe( false );
      expect( user.comparePasswords( 'correcthorsebatterystaple' ) ).toBe( true );
      expect( user.comparePasswords() ).toBe( false );
    } );
  } );
  describe( 'Cat', () => {
    it( 'should have the properties name and age and the methods growOlder and meow', () => {
      const snowball = new Cat( {
        name: 'Snowball II',
        age: 5
      } );
      expect( snowball ).toHaveProperty( 'name' );
      expect( snowball ).toHaveProperty( 'age' );
      expect( typeof snowball.growOlder ).toBe( 'function' );
      expect( typeof snowball.meow ).toBe( 'function' );
    } );
    it( 'should inherit properties and methods from Animal', () => {
      const snowball = new Cat( {
        name: 'Snowball II',
        age: 5
      } );
      expect( Object.prototype.hasOwnProperty.call( Object.getPrototypeOf( snowball ), 'growOlder' ) ).toBe( false );
      expect( snowball.age ).toBe( 5 );
      expect( snowball.growOlder() ).toBe( 6 );
    } );
  } );
} );
