"use strict";

var AbstractToken = require('../tokens/AbstractToken');
var TokenTypes = require('../constants/TokenTypes');

class AliasToken extends AbstractToken {
  constructor(
    subToken,
    aliasName
  ) {
    super();
    this.subToken = subToken;
    this.aliasName = aliasName;
  }

  getType() {
    return TokenTypes.ALIAS;
  }

  toString() {
    return `
      TOKEN ALIAS 
      aliasName: "${this.aliasName}"`;
  }

  isColumnLike() {
    return this.subToken.isColumnLike();
  }

  isTableLike() {
    return this.subToken.isTableLike();
  }

  exportToQuery() {
    var subText = this.subToken.exportToQuery(null, null);
    var result = `${subText} as ${this.aliasName}`;
    if (this._isBeforeColumn()) {
      return result + ',';
    }
    if (this._isBeforeTable()) {
      return result + ',';
    }
    return result;
  }
}

module.exports = AliasToken;
