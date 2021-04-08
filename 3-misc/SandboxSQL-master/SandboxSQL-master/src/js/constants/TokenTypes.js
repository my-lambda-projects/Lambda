var keyMirror = require('../utils/keyMirror');

/**
 * Still not clear how we will handle
 * things like ORDER BY Country ASC, CustomerName DESC
 * ...
 */

var TokenTypes = keyMirror({
  // Stuff like SELECT, FROM, JOIN, etc
  KEYWORD: null,
  // Column names. Probably will need to add
  // a concept for column aliases in a bit...
  COLUMN: null,
  // General aliases, like COUNT(1) as total, etc
  ALIAS: null,
  // Table names (similar)
  TABLE: null,
  // MIN(), MAX(), COUNT()
  FUNCTION: null,
  // =, >=, <= -- can be a keyword?
  // BETWEEN, LIKE, IN etc
  OPERATOR: null,
  // 100 or 123 or whatever (=123)
  VALUE: null,
});

TokenTypes.FUNCTION_TYPES = keyMirror({
  MIN: null,
  MAX: null,
  COUNT: null,
});

module.exports = TokenTypes;
