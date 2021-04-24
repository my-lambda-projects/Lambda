"use strict";

class AbstractToken {

  constructor(
  ) {
    this.prev = null;
    this.next = null;
    // hacky abstract check
    /* uncomment when babel supports this
    if (new.target === 'AbstractToken') {
      throw new TypeError('cannot instantiate directly');
    }
    if (this.getType === undefined) {
      throw new TypeError('must implemented getType');
    }*/
  }

  setPrevious(prev) {
    this.prev = prev;
  }

  setNext(next) {
    this.next = next;
  }

  getPrevious() {
    return this.prev;
  }

  getNext() {
    return this.next;
  }

  _isBeforeColumn() {
    var next = this.getNext();
    return next && next.isColumnLike && next.isColumnLike();
  }

  _isBeforeTable() {
    var next = this.getNext();
    return next && next.isTableLike && next.isTableLike();
  }

}

module.exports = AbstractToken;
