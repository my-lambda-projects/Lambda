// Get ToC div
let toc = document.getElementById( "ToC" );

//Add a header
let tocHeader = document.createElement( "h2" );
tocHeader.innerText = "Table of contents";
toc.appendChild( tocHeader );

// Create a list for the ToC entries
let tocList = document.createElement( "ul" );

// Get the h1 tags - ToC entries
let headers = document.getElementsByTagName( "h2" );

// For each h2
for ( i = 0; i < headers.length; i++ ) {

  // Create an id
  name = "h" + i;
  headers[ i ].id = name;

  // a list item for the entry
  let tocListItem = document.createElement( "li" );

  // a link for the h1
  let tocEntry = document.createElement( "a" );
  tocEntry.setAttribute( "href", "#" + name );
  tocEntry.innerText = headers[ i ].innerText;

  tocListItem.appendChild( tocEntry );
  tocList.appendChild( tocListItem );
}



toc.appendChild( tocList );
