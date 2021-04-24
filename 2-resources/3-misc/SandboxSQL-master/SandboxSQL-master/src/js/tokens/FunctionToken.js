"use strict";

var AbstractToken = require('../tokens/AbstractToken');
var TokenTypes = require('../constants/TokenTypes');
var FUNCTION_TYPES = TokenTypes.FUNCTION_TYPES;

class FunctionToken extends AbstractToken {

  constructor(
    functionType,
    params
  ) {
    super();
    this.functionType = functionType;
    this.params = params;
  }

  getType() {
    return TokenTypes.FUNCTION;
  }

  toString() {
    return `FUNCTION token: ${this.functionType}`;
  }

  isColumnLike() {
    // hrm. i guess yes?
    return true;
  }

  exportToQuery() {
    var result = null;
    switch (this.functionType) {
      case FUNCTION_TYPES.MIN:
        result = 'MIN(' + this.params.colNames.join(',') + ')';
        break;
      case FUNCTION_TYPES.MAX:
        result = 'MAX(' + this.params.colNames.join(',') + ')';
        break;
      case FUNCTION_TYPES.COUNT:
        result = 'COUNT(' + 
          (this.params.isDistinct ?  'DISTINCT ' : '') +
          this.params.countName + 
          ')';
        break;
    }

    if (this._isBeforeColumn()) {
      return result + ',';
    }
    return result;
  }
  
}

module.exports = FunctionToken;
