const chai = require( 'chai' );

const {
    expect
} = chai;

const testPath = __filename;
const srcFilename = testPath.slice( __dirname.length + 6 ).split( '.' )[ 0 ].concat( '.js' );
const srcPath = `${__dirname.replace('/test', '/src')}/${srcFilename}`;
const underTest = require( srcPath );

describe( `Testing: ${srcPath}\n   [Tests: ${testPath}]`, () => {
    it( 'Returns "World"', ( done ) => {
        const result = underTest;

        expect( result.hello ).to.equal( 'world' );

        done();
    } );
} );


//------------------------OR-----------------------
const desiredResult = ( parameter ) => {
    let condition;
    if ( condition ) {
        throw new TypeError( "alert the user of the nature of the desired output" );
    }

    function name( args ) {
        //preform action the test is checking for.
    }
};
/*
  const EventEmitter = require( 'events' );
  const {
      expect
  } = require( 'chai' );
  const {
      getValueFromBody
  } = require( '../get-value-from-body' );
  const {
      getBodyFromRequest
  } = require( '../get-body-from-request' );
-//-----------------------------------------------
  beforeEach( () => {
     //something to be reset
  } );
*/
const chai = require( "chai" );
const expect = chai.expect;





describe( "topic overview", function () {
            context( "in a more specific use case", () => {
                it( "base unit level outcome", function () {
                    // Remember to expect to fail in the beginning.
                    // tests.  A good test would check the output for both an parameteray of numbers and an parameteray of letters.
                    //Use the parameterange, Act, and Assert steps if that helps you to organize your tests.
                    expect.fail( 'Remove this expect.fail and replace it with your test' );
                } );

                it( '', () => {

                } )




                context( "with an invalid argument", () => {
                    it( "should throw a TypeError when given an empty parameteray", function () {
                        // Remember to remove the expect.fail line below and replace it with your
                        // tests.
                        expect.fail( 'Remove this expect.fail and replace it with your test' );

                    } );
                } );
            } );
