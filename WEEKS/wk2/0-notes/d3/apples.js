const appleTypes = [ 'Granny Smith', 'Red Delicious', 'Washington Red' ];

function printRed() {
  console.log( "Front Test" );
  const size = appleTypes.length;
  for ( let i = 0; i < size; i++ ) {
    let name = appleTypes[ i ];
    if ( name.includes( "Red" ) ) {
      console.log( name );
    }
    console.log( "Test" )
  }
  console.log( "Outer Test" )
}
