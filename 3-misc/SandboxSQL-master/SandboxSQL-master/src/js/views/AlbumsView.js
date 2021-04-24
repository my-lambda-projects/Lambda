var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  RecyclerViewBackedScrollView,
  ListView,
} = React;
var DB = require('../data/DB');
var rethrowOr = require('../utils/rethrowOr');
var Routes = require('../constants/Routes');

var database = DB.getMusicDB();

var AlbumsView = React.createClass({
  render: function () {
    return (
      <View style={styles.wrapper}>
        <ListView
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          renderRow={this._renderTrack}
          renderSectionHeader={this._renderSectionHeader}
        />
      </View>
    );
  },

  getInitialState: function () {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2, 
      sectionHeaderHasChanged: (r1, r2) => r1 !== r2,
    });
    return {
      dataSource: ds
    };
  },

  componentDidMount: function () {
    var tracks = {};
    database.executeSQL(
      `
      SELECT 
        Album.Title as AlbumName, 
        Track.TrackId, 
        Track.Name 
      FROM Track
      JOIN Album ON Album.AlbumId = Track.AlbumId
      WHERE Album.ArtistId = ?
      ORDER BY Album.Title, Track.Name
      `,
      [this.props.artistID],
      (row) => {
        tracks[row.AlbumName] = tracks[row.AlbumName] || [];
        tracks[row.AlbumName].push(row);
      },
      (error) => {
        if (error) {
          throw error;
        } else {
          this.setState({dataSource: this.state.dataSource.cloneWithRowsAndSections(tracks)});
        }
      });
  },

  _renderTrack: function(track) {
    return (
      <View>
        <View style={styles.listItem}>
          <Text style={styles.listItemTitle}>{track.Name}</Text>
        </View>
        <View style={styles.seperator}/>
      </View>
    );
  },

  _renderSectionHeader: function(sectionData, sectionId) {
    return (
      <View>
        <View style={styles.albumHeading}><Text>{{ sectionId }}</Text></View>
        <View style={styles.seperator}/>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  listItem: {
    padding: 10
  },
  albumHeading: {
    padding: 3,
    backgroundColor: "#ccc",
  },
  seperator: {
    height: 1,
    backgroundColor: 'black'
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#F8F9E7',
    justifyContent: 'center',
  },
});

module.exports = AlbumsView;
