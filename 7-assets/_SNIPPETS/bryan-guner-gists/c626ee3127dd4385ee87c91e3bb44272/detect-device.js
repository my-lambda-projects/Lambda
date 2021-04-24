  // Device Checks
  function isIE() {
    return !+"\v1";
  };

  function isFF() {
    return !!_V_.ua.match( "Firefox" )
  }

  function isIPad() {
    return navigator.userAgent.match( /iPad/i ) !== null;
  }

  function isIPhone() {
    return navigator.userAgent.match( /iPhone/i ) !== null;
  }

  function isIOS() {
    return VideoJS.isIPhone() || VideoJS.isIPad();
  }

  function iOSVersion() {
    const match = navigator.userAgent.match( /OS (\d+)_/i );
    if ( match && match[ 1 ] ) {
      return match[ 1 ];
    }
  }

  function isAndroid() {
    return navigator.userAgent.match( /Android.*AppleWebKit/i ) !== null;
  }

  function androidVersion() {
    const match = navigator.userAgent.match( /Android (\d+)\./i );
    if ( match && match[ 1 ] ) {
      return match[ 1 ];
    }
  }
