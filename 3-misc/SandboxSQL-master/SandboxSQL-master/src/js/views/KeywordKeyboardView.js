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
var KeywordToken = require('../tokens/KeywordToken');

// TODO -- place somewhere better?
const KEYWORDS = [
  'SELECT',
  'FROM',
  'GROUP BY',
  'ORDER BY',
  'ASC',
  'DESC',
  'DISTINCT',
  'WHERE',
];

var KeywordKeyboardView = React.createClass({
  propTypes: {
    onSelected: PropTypes.func.isRequired,
  },

  render: function() {
    return (
      <View>
        {KEYWORDS.map(keywordName => 
          <TouchableOpacity 
            key={keywordName}
            activeOpacity={0.7}
            onPress={() => this._onSelected(keywordName)}>
            <Text style={styles.keywordName}>
              {keywordName}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  },

  _onSelected: function(keywordName) {
    this.props.onSelected(
      new KeywordToken(keywordName),
    );
  },

});

var styles = StyleSheet.create({
  keywordName: {
    color: Colors.TEXT_BASE,
  },
});

module.exports = KeywordKeyboardView;
