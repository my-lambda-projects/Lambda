let zoom = 1;

$( '.zoom' ).on( 'click', () => {
  zoom += 0.1;
  $( '.target' ).css( 'zoom', zoom );
} );
$( '.zoom-init' ).on( 'click', () => {
  zoom = 1;
  $( '.target' ).css( 'zoom', zoom );
} );
$( '.zoom-out' ).on( 'click', () => {
  zoom -= 0.1;
  $( '.target' ).css( 'zoom', zoom );
} );
