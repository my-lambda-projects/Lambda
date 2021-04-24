  /**
   * Reads a File or Blob object and returns it as an ArrayBuffer.
   *
   * @param {Blob|File} blob The File or Blob data.
   * @param {Function} callback Success callback passed the array buffer.
   * @param {Function=} opt_error Optional error callback if the read fails.
   */
 function fileToArrayBuffer( blob, callback, opt_errorCallback ) {
    const reader = new FileReader();
    reader.onload = e => {
      callback( e.target.result );
    };
    reader.onerror = e => {
      if ( opt_errorCallback ) {
        opt_errorCallback( e );
      }
    };

    reader.readAsArrayBuffer( blob );
  },