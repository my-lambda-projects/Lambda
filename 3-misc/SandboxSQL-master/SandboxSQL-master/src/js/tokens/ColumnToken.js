"use strict";

var AbstractToken = require('../tokens/AbstractToken');
var TokenTypes = require('../constants/TokenTypes');

class ColumnToken extends AbstractToken {

  constructor(
   tableName,
   colInfo
  ) {
    super();
    this.tableName = tableName;
    this.colInfo = colInfo;
  }

  getType() {
    return TokenTypes.COLUMN;
  }

  toString() {
    return `
      COLUMN from Table "${this.tableName}" 
      info: ${JSON.stringify(this.colInfo)}`;
  }

  isColumnLike() {
    return true;
  }

  exportToQuery() {
    if (this._isBeforeColumn()) {
      return this.colInfo.name + ',';
    }
    return this.colInfo.name;
  }
}

module.exports = ColumnToken;
