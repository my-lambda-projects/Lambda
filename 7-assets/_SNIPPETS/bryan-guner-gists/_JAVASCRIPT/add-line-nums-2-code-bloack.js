(() => {
  let counter = 0;
  let numbered;
  let source = document.getElementsByClassName( 'prettyprint source' );

  if ( source && source[ 0 ] ) {
    source = source[ 0 ].getElementsByTagName( 'code' )[ 0 ];

    numbered = source.innerHTML.split( '\n' );
    numbered = numbered.map( item => {
      counter++;
      return `<span id="line${counter}" class="line"></span>${item}`;
    } );

    source.innerHTML = numbered.join( '\n' );
  }
})();
