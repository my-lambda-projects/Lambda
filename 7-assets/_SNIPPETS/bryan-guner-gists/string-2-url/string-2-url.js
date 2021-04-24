  /**
   * Creates a data: URL from string data.
   *
   * @param {string} str The content to encode the data: URL from.
   * @param {string} contentType The mimetype of the data str represents.
   * @param {bool=} opt_isBinary Whether the string data is a binary string
   *     (and therefore should be base64 encoded). True by default.
   * @return {string} The created data: URL.
   */
  strToDataURL( str, contentType, opt_isBinary ) {
    const isBinary = opt_isBinary != undefined ? opt_isBinary : true;
    if ( isBinary ) {
      return 'data:' + contentType + ';base64,' + self.btoa( str );
    } else {
      return 'data:' + contentType + ',' + str;
    }
  },