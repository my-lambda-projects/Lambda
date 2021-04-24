	function setVisibility( id, isVisible ) {
	  if ( !autoHideShow ) {
	    return;
	  }
	  var v = isVisible ? "visible" : "hidden";
	  if ( isDomLoaded && getElementById( id ) ) {
	    getElementById( id ).style.visibility = v;
	  } else {
	    createCSS( "#" + id, "visibility:" + v );
	  }
	}
