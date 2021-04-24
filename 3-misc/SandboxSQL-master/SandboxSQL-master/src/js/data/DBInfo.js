var React = require('react-native');
var {
  PropTypes,
} = React;
var SQLite = require('react-native-sqlite');

var rethrowOr = require('../utils/rethrowOr');

var _dbToTables = {};
var _tableToCols = {};

var ColShape = PropTypes.shape({
  isPrimaryKey: PropTypes.bool.isRequired,
  notNull: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});

var DBInfo = {
  ColShape,

  getTables: function(database, callback) {
    var dbName = database.getName();
    if (_dbToTables[dbName]) {
      callback(dbName);
      return;
    }

    var tables = [];
    database.executeSQL(
      `SELECT name FROM sqlite_master where type='table'`,
      [], 
      (row) => tables.push(row.name),
      rethrowOr(() => {
        _dbToTables[dbName] = tables;
        callback(tables);
      }),
    );
  },

  getColumnsForTable: function(database, tableName, callback) {
    var key = `${database.getName()}_${tableName}`;
    if (_tableToCols[key]) {
      callback(key);
      return;
    }

    var cols = [];
    database.executeSQL(
      `PRAGMA table_info(${tableName})`,
      [],
      (row) => { cols.push(this._getColShape(row)); },
      rethrowOr(() => {
        _tableToCols[key] = cols;
        callback(cols);
      }),
    );
  },

  _getColShape: function(rawCol) {
    return {
      isPrimaryKey: !!rawCol.pk,
      notNull: !!rawCol.notnull,
      name: rawCol.name,
      type: rawCol.type,
    };
  },
};

DBInfo.ColShape = ColShape;

module.exports = DBInfo;
