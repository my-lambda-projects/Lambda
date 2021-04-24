"use strict";

var AbstractToken = require('../tokens/AbstractToken');
var TokenTypes = require('../constants/TokenTypes');

class TableToken extends AbstractToken {

  constructor(
    tableName
  ) {
    super();
    this.tableName = tableName;
  }

  getType() {
    return TokenTypes.TABLE;
  }

  toString() {
    return `Table "${this.tableName}"`;
  }

  shouldExportSpace() {
    var next = this.getNext();

    if (this._isBeforeColumn()) {
      // Actually want to output something like
      // table.foo
      return false;
    }
    return true;
  }

  isTableLike() {
    return !this._isBeforeColumn();
  }

  isColumnLike() {
    // We are if we are concatted with a column
    return this._isBeforeColumn();
  }

  exportToQuery() {
    if (this._isBeforeColumn()) {
      // We are referencing a specific column probably
      return this.tableName + '.';
    }
    if (this._isBeforeTable()) {
      // selecting from multiple tables
      return this.tableName + ',';
    }
    return this.tableName;
  }

}

module.exports = TableToken;
