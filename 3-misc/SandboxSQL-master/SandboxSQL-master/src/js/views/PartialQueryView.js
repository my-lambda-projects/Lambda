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

var Colors = require('../constants/Colors');
var PartialQueryStore = require('../stores/PartialQueryStore');
var PartialQueryActions = require('../actions/PartialQueryActions');
var StoreSubscribeMixin = require('../utils/StoreSubscribeMixin');

var PartialQueryView = React.createClass({

  mixins: [StoreSubscribeMixin([
    PartialQueryStore,
  ])],

  storeChanged: function() {
    // This is probably acceptable for now
    this.forceUpdate();
  },

  render: function() {
    var tokens = PartialQueryStore.getTokens();
    var insertIndex = PartialQueryStore.getInsertIndex();

    /* curr.shouldExportSpace || curr.shouldExportSpace())*/
    var result = [];
    for (var index = 0; index < tokens.length; index++) {
      if (index === insertIndex) {
        result.push(this.renderCursor());
      }

      var token = tokens[index];
      var onTap = (_i) => {
        return () => this._onSelected(_i);
      };

      result.push(
        <TouchableOpacity 
          key={token.exportToQuery() + index}
          activeOpacity={0.7}
          onPress={onTap(index + 1)}>
          <View style={styles.token}>
            <Text style={styles.queryText}>
              {token.exportToQuery() + ' '}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
    if (index === insertIndex) {
      result.push(this.renderCursor());
    }

    return (
      <View style={styles.tokenWrapper}>
        {result}
      </View>
    );
  },

  renderCursor: function() {
    return (
      <View key="cursor" style={styles.cursor}>
      </View>
    );
  },

  _onSelected: function(index) {
    PartialQueryActions.updateInsertIndex(index);
  },
 
});

var styles = StyleSheet.create({
  tokenWrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  cursor: {
    width: 2,
    height: 20,
    marginTop: 6,
    marginBottom: 4,
    backgroundColor: Colors.BLUE1,
  },
  token: {
    padding: 4,
    backgroundColor: Colors.SHADE2,
    borderRadius: 4,
    margin: 4,
  },
  queryText: {
    color: Colors.TEXT_BASE,
  },
});

module.exports = PartialQueryView;
