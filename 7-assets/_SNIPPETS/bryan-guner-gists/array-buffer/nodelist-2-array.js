/**
   * Turns a NodeList into an array.
   *
   * @param {NodeList} list The array-like object.
   * @return {Array} The NodeList as an array.
   */
function  toArray( list ) {
    return Array.prototype.slice.call( list || [], 0 );
  }