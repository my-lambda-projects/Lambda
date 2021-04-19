var React = require('react-native');
var {
  ActivityIndicatorIOS,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  TouchableOpacity,
  PropTypes,
  TextInput,
  ScrollView,
} = React;
var Swiper = require('react-native-swiper')

var DBInfo = require('../data/DBInfo');
var Colors = require('../constants/Colors');
var KeywordKeyboardView = require('../views/KeywordKeyboardView');
var ColumnToken = require('../tokens/ColumnToken');
var TableToken = require('../tokens/TableToken');
var PartialQueryStore = require('../stores/PartialQueryStore');
var PartialQueryActions = require('../actions/PartialQueryActions');
var StoreSubscribeMixin = require('../utils/StoreSubscribeMixin');
var PartialQueryView = require('../views/PartialQueryView');

var QueryKeyboard = React.createClass({

  propTypes: {
    database: PropTypes.object.isRequired,
  },

  getInitialState: function() {
    return {
      isLoadingTables: true,
      isLoadingCols: true,
      tables: null,
      tableInfo: {},
    };
  },

  componentDidMount: function() {
    DBInfo.getTables(this.props.database, (tables) => {
      this.setState(
        {
          tables,
          isLoadingTables: false,
        },
        () => this.getCols(),
      );
    });
  },

  getCols: function() {
    this.state.tables.forEach((tableName) => {
      DBInfo.getColumnsForTable(
        this.props.database, 
        tableName,
        (cols) => {
          var tableInfo = this.state.tableInfo;
          tableInfo[tableName] = cols;
          this.setState({
            tableInfo,
          }, () => {
            if (Object.keys(this.state.tableInfo).length ===
                this.state.tables.length) {
              this.setState({
                isLoadingCols: false,
              })
            }
          });
        },
      );
    });
  },

  render: function() {
    if (this.state.isLoadingTables) {
      return (
        <View style={[styles.wrapper, styles.loading]}>
          <ActivityIndicatorIOS
            size="large" 
            color="grey"
          />
        </View>
      );
    }

    var swiperViews = this.state.tables.map(
      tableName => this.renderTable(tableName),
    );
    swiperViews.unshift(
      <KeywordKeyboardView
        key="keyboard"
        onSelected={this._addToken}
      />
    );

    return (
      <ScrollView style={styles.wrapper}>
        <PartialQueryView />
        <TouchableOpacity 
          activeOpacity={0.7}
          onPress={this._onLeftPressed}>
          <Text>
            {'<-'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this._onRightPressed}>
          <Text>
            {'->'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          activeOpacity={0.7}
          onPress={this._onDeletePressed}>
          <Text>
            {'X'}
          </Text>
        </TouchableOpacity>
        <Swiper key="const" activeDot={this._getActiveDot()} height={200}>
          {swiperViews}
        </Swiper>
      </ScrollView>
    );
  },

  renderTable: function(tableName) {
    var cols = this.state.tableInfo[tableName];
    var content = null;
    if (!cols) {
      content = (
        <ActivityIndicatorIOS
          size="small"
          color="grey"
        />
      );
    } else {
      content = this.renderColumnsForTable(tableName, cols);
    }

    return (
      <View style={styles.tableWrapper} key={tableName}>
        <ScrollView style={styles.tableScroll} height={150}>
          <View style={styles.tableHeader}>
            <TouchableOpacity 
              activeOpacity={0.7}
              onPress={() => this._onTablePressed(tableName)}>
              <View style={styles.tableNameWrapper}>
                <Text style={styles.tableName}>
                  {tableName}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.columnsContainer}>
            {content}
          </View>
        </ScrollView>
      </View>
    );
  },

  renderColumnsForTable: function(tableName, cols) {
    return cols.map(col =>
      <TouchableOpacity 
        activeOpacity={0.7}
        onPress={() => this._onColPressed(tableName, col)}
        key={`${tableName}_${col.name}`}>
        <View style={styles.columnContainer}>
          <Text style={styles.columnText}>
            {col.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  _getActiveDot: function() {
    return (
      <View style={{
          backgroundColor: Colors.SHADE2,
          width: 8, 
          height: 8, 
          borderRadius: 4, 
          marginLeft: 3, 
          marginRight: 3, 
          marginTop: 3, 
          marginBottom: 3,
        }} 
      />
    );
  },

  _onDeletePressed: function() {
    if (PartialQueryStore.getNumTokens() <= 0) {
      return;
    }

    PartialQueryActions.deleteToken();
  },

  _onLeftPressed: function() {
    PartialQueryActions.decrementInsertIndex();
  },

  _onRightPressed: function() {
    PartialQueryActions.incrementInsertIndex();
  },

  _addToken: function(token) {
    PartialQueryActions.addToken(token);
  },

  _onTablePressed: function(tableName) {
    this._addToken(
      new TableToken(tableName),
    );
  },

  _onColPressed: function(tableName, colInfo) {
    this._addToken(
      new ColumnToken(tableName, colInfo),
    );
  },

});

var styles = StyleSheet.create({
  queryText: {
    color: Colors.TEXT_BASE,
  },
  columnsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  columnText: {
    color: Colors.TEXT_BASE,
    fontSize: 16,
  },
  columnContainer: {
    padding: 4,
    backgroundColor: Colors.SHADE2,
    borderRadius: 4,
    margin: 4,
  },
  tableWrapper: {
    marginHorizontal: 28,
    marginBottom: 10,
  },
  tableNameWrapper: {
    backgroundColor: Colors.SHADE1,
    borderColor: Colors.SHADE2,
    borderWidth: 1,
    borderRadius: 8,
    padding: 4,
    margin: 4,
  },
  tableHeader: {
    alignItems: 'center',
  },
  tableName: {
    color: Colors.TEXT_BASE,
    fontSize: 12,
  },
  wrapper: {
    flex: 1,
  },
  loading: {
    padding: 10,
  },
});

module.exports = QueryKeyboard;
