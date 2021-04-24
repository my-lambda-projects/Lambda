
  /**
   * Reads an ArrayBuffer as returns its contents as a binary string.
   *
   * @param {ArrayBuffer} buffer The buffer of data.
   * @param {Function} callback Success callback passed the binary string.
   * @param {Function=} opt_error Optional error callback if the read fails.
   */
 function  arrayBufferToBinaryString( buffer, callback, opt_errorCallback ) {
    const reader = new FileReader();
    reader.onload = e => {
      callback( e.target.result );
    };
    reader.onerror = e => {
      if ( opt_errorCallback ) {
        opt_errorCallback( e );
      }
    };

    const bb = new BlobBuilder();
    bb.append( buffer );
    reader.readAsBinaryString( bb.getBlob() );
  }