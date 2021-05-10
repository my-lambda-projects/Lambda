$( document ).ready( function () {

  for ( let i = 1; i <= 12; i++ ) {
    $( '.flex-container' ).append( `<li class="flex-item">${i}</li>` );
  };

  $( '.flex-item' ).click( function () {
    $( this ).toggleClass( 'blue' );
  } );

} );
