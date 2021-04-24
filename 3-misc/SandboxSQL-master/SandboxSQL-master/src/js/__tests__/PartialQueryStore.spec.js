var assert = require('assert');

var PartialQueryActions = require('../actions/PartialQueryActions');
var PartialQueryStore = require('../stores/PartialQueryStore');
var ColumnToken = require('../tokens/ColumnToken');
var KeywordToken = require('../tokens/KeywordToken');
var TableToken = require('../tokens/TableToken');
var TokenTypes = require('../constants/TokenTypes');
var AliasToken = require('../tokens/AliasToken');
var FunctionToken = require('../tokens/FunctionToken');

var FUNCTION_TYPES = TokenTypes.FUNCTION_TYPES;

function _addToken(token) {
  PartialQueryActions.addToken(token);
}

function _addTokens() {
  for (var i = 0; i < arguments.length; i++) {
    PartialQueryActions.addToken(arguments[i]);
  }
}

function _updateInsertIndex(newIndex) {
  PartialQueryActions.updateInsertIndex(newIndex);
}

function _colToken(name) {
  return new ColumnToken('foo_table', {name: name || 'bar'});
}

function _colAliasToken(colName, aliasName) {
  return new AliasToken(
    _colToken(colName),
    aliasName
  );
}

function _aliasToken(subToken, aliasName) {
  return new AliasToken(
    subToken,
    aliasName
  );
}

function _keywordToken(name) {
  return new KeywordToken(name);
}

function _tableToken(name) {
  return new TableToken(name);
}

function _functionToken(functionType, params) {
  return new FunctionToken(
    functionType,
    params
  );
}

describe('partial query store', () => {

  beforeEach(() => {
    PartialQueryActions.clearTokens();
  })

  describe('insertIndex', () => {
    it('can increment and decrement', () => {
      assert.equal(PartialQueryStore.getInsertIndex(), 0);
      PartialQueryActions.incrementInsertIndex();
      // since no tokens yet
      assert.equal(PartialQueryStore.getInsertIndex(), 0);
      _addToken(_colToken());
      _addToken(_colToken());
      // we added two
      assert.equal(PartialQueryStore.getInsertIndex(), 2);
      PartialQueryActions.incrementInsertIndex();
      // its maxed
      assert.equal(PartialQueryStore.getInsertIndex(), 2);
      PartialQueryActions.decrementInsertIndex();
      assert.equal(PartialQueryStore.getInsertIndex(), 1);
      PartialQueryActions.decrementInsertIndex();
      assert.equal(PartialQueryStore.getInsertIndex(), 0);
      PartialQueryActions.decrementInsertIndex();
      assert.equal(PartialQueryStore.getInsertIndex(), 0);
    });

    it('can also be updated directly', () => {
      assert.equal(PartialQueryStore.getInsertIndex(), 0);
      _addToken(_colToken());
      _addToken(_colToken());
      _addToken(_colToken());
      _updateInsertIndex(1);
      assert.equal(PartialQueryStore.getInsertIndex(), 1);
      _updateInsertIndex(3);
      assert.equal(PartialQueryStore.getInsertIndex(), 3);
      _updateInsertIndex(10);
      assert.equal(PartialQueryStore.getInsertIndex(), 3);
      _updateInsertIndex(-1);
      assert.equal(PartialQueryStore.getInsertIndex(), 0);
    });
  });

  describe('token formatting ', () => {
    it('can format with commas', () => {
      _addTokens(
        _keywordToken('SELECT'),
        _colToken('*'),
        _colToken('name'),
        _keywordToken('FROM'),
        _tableToken('foo_table')
      );
      assert.equal(
        PartialQueryStore.exportToStringQuery(),
        'SELECT *, name FROM foo_table'
      );
    });

    it('handles formatting aliases correctly', () => {
      _addTokens(
        _keywordToken('SELECT'),
        _colToken('name'),
        _colAliasToken('bar', 'baz'),
        _colToken('foo'),
        _keywordToken('FROM'),
        _tableToken('foo_table')
      );
      assert.equal(
        PartialQueryStore.exportToStringQuery(),
        'SELECT name, bar as baz, foo FROM foo_table'
      );
    });

    it('handles functions also', () => {
      _addTokens(
        _keywordToken('SELECT'),
        _colToken('name'),
        _colAliasToken('bar', 'baz'),
        _functionToken(
          FUNCTION_TYPES.COUNT,
          {countName: '1'}
        ),
        _keywordToken('FROM'),
        _tableToken('foo_table')
      );
      assert.equal(
        PartialQueryStore.exportToStringQuery(),
        'SELECT name, bar as baz, COUNT(1) FROM foo_table'
      );
    });

    it('can handle counts as aliases ', () => {
      _addTokens(
        _keywordToken('SELECT'),
        _colToken('name'),
        _colAliasToken('bar', 'baz'),
        _aliasToken(
          _functionToken(
            FUNCTION_TYPES.COUNT,
            {countName: '*'}
          ),
          'total'
        ),
        _colAliasToken('bat', 'banana'),
        _keywordToken('FROM'),
        _tableToken('foo_table')
      );
      assert.equal(
        PartialQueryStore.exportToStringQuery(),
        'SELECT ' +
          'name, bar as baz, COUNT(*) as total, bat as banana ' +
          'FROM foo_table'
      );
    });

    it('does some basic group by formatting', () => {
      _addTokens(
        _keywordToken('SELECT'),
        _colToken('name'),
        _keywordToken('FROM'),
        _tableToken('foo_table'),
        _keywordToken('GROUP BY'),
        _colToken('name'),
        _colToken('baz')
      );
      assert.equal(
        PartialQueryStore.exportToStringQuery(),
        'SELECT name FROM foo_table GROUP BY name, baz'
      );
    });

    it('does some basic ordering by', () => {
      _addTokens(
        _keywordToken('SELECT'),
        _colToken('name'),
        _keywordToken('FROM'),
        _tableToken('foo_table'),
        _keywordToken('ORDER BY'),
        _colToken('name'),
        _colToken('baz')
      );
      assert.equal(
        PartialQueryStore.exportToStringQuery(),
        'SELECT name FROM foo_table ORDER BY name, baz'
      );
    });

    it('can count columns too', () => {
      _addTokens(
        _keywordToken('SELECT'),
        _functionToken(
          FUNCTION_TYPES.COUNT,
          {countName: 'bar'}
        ),
        _functionToken(
          FUNCTION_TYPES.COUNT,
          {countName: 'baz', isDistinct: true}
        ),
        _keywordToken('FROM'),
        _tableToken('foo_table')
      );
      assert.equal(
        PartialQueryStore.exportToStringQuery(),
        'SELECT COUNT(bar), COUNT(DISTINCT baz) FROM foo_table'
      );

    });

    it('can even order by for asc desc', () => {
      _addTokens(
        _keywordToken('SELECT'),
        _colToken('name'),
        _keywordToken('FROM'),
        _tableToken('foo_table'),
        _keywordToken('ORDER BY'),
        _colToken('name'),
        _keywordToken('DESC'),
        _colToken('baz'),
        _keywordToken('ASC'),
        _colToken('foo')
      );
      assert.equal(
        PartialQueryStore.exportToStringQuery(),
        'SELECT name FROM foo_table ' +
          'ORDER BY name DESC, baz ASC, foo'
      );
    });

    it('can export specific table col selections', () => {
      _addTokens(
        _keywordToken('SELECT'),
        _tableToken('foo_table'),
        _colToken('name'),
        _keywordToken('FROM'),
        _tableToken('foo_table')
      );
      assert.equal(
        PartialQueryStore.exportToStringQuery(),
        'SELECT foo_table.name FROM foo_table'
      );
    });

    it('can format table col aliases', () => {
      _addTokens(
        _keywordToken('SELECT'),
        _tableToken('foo_table'),
        _colAliasToken('bar', 'baz'),
        _colToken('name'),
        _colToken('foo'),
        _keywordToken('FROM'),
        _tableToken('foo_table')
      );
      assert.equal(
        PartialQueryStore.exportToStringQuery(),
        'SELECT foo_table.bar as baz, name, foo FROM foo_table'
      );
    });

    it('can format table col aliases (multiple)', () => {
      _addTokens(
        _keywordToken('SELECT'),
        _tableToken('foo_table'),
        _colAliasToken('bar', 'baz'),
        _tableToken('foo_table'),
        _colToken('name'),
        _tableToken('foo_table'),
        _colToken('foo'),
        _keywordToken('FROM'),
        _tableToken('foo_table')
      );
      assert.equal(
        PartialQueryStore.exportToStringQuery(),
        'SELECT foo_table.bar as baz, foo_table.name, ' +
          'foo_table.foo FROM foo_table'
      );
    });

    it('can select from multiple tables woah', () => {
      _addTokens(
        _keywordToken('SELECT'),
        _colToken('name'),
        _colToken('foo'),
        _keywordToken('FROM'),
        _tableToken('foo_table'),
        _tableToken('bar_table')
      );
      assert.equal(
        PartialQueryStore.exportToStringQuery(),
        'SELECT name, foo FROM foo_table, bar_table'
      );
    });

    it('can select from multiple tables with aliases', () => {
      _addTokens(
        _keywordToken('SELECT'),
        _tableToken('o'),
        _colToken('name'),
        _tableToken('o'),
        _colToken('bar'),
        _keywordToken('FROM'),
        _aliasToken(
          _tableToken('foo_table'),
          'o'
        )
      );
      assert.equal(
        PartialQueryStore.exportToStringQuery(),
        'SELECT o.name, o.bar FROM foo_table as o'
      );
    });

    it('select from multiple tables with aliases and commas', () => {
      _addTokens(
        _keywordToken('SELECT'),
        _tableToken('o'),
        _colToken('name'),
        _tableToken('b'),
        _colToken('bar'),
        _keywordToken('FROM'),
        _aliasToken(
          _tableToken('foo_table'),
          'o'
        ),
        _tableToken('z_table'),
        _aliasToken(
          _tableToken('bar_table'),
          'b'
        )
      );
      assert.equal(
        PartialQueryStore.exportToStringQuery(),
        'SELECT o.name, b.bar FROM foo_table as o, z_table, bar_table as b'
      );
    });

  });

});
