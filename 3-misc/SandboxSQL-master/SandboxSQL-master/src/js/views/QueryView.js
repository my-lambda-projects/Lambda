var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
} = React;
var DB = require('../data/DB');
var DBInfo = require('../data/DBInfo');
var Routes = require('../constants/Routes');
var PartialQueryStore = require('../stores/PartialQueryStore');
var QueryResultView = require('../views/QueryResultView');
var Colors = require('../constants/Colors');
var QueryKeyboard = require('../views/QueryKeyboard');

var database = DB.getMusicDB();

var QueryView = React.createClass({

  getInitialState: function() {
    return {
      query: null,
    };
  },

  render: function() {
    return (
      <View style={styles.wrapper}>
        <Text>
          Enter a query:
        </Text>
        <TouchableHighlight
          style={styles.execute}
          underlayColor="#005F6B"
          onPress={this.executeQuery}>
          <Text style={styles.executeText}>
            Query dude!
          </Text>
        </TouchableHighlight>
        <QueryKeyboard 
          ref="queryKeyboard"
          database={database}
        />
        {!this.state.query ? null :
          <QueryResultView
            key={this.state.query}
            database={database}
            query={this.state.query}
          />
        }
      </View>
    );
  },

  executeQuery: function() {
    this.setState({
      query: PartialQueryStore.exportToStringQuery(),
    });
  },

});

var styles = StyleSheet.create({
  textInput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
  },
  execute: {
    backgroundColor: Colors.SHADE3,
    borderColor: Colors.HIGHLIGHT,
    borderWidth: 1,
    padding: 4,
  },
  executeText: {
    color: Colors.TEXT_HIGHLIGHT,
  },
  wrapper: {
    backgroundColor: Colors.BASE_GRAY,
    flex: 1,
  },
});

module.exports = QueryView;
