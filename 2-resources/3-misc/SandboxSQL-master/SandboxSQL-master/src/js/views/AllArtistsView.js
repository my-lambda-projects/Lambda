var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
} = React;
var DB = require('../data/DB');
var rethrowOr = require('../utils/rethrowOr');
var Routes = require('../constants/Routes');

var database = DB.getMusicDB();

var AllArtistsView = React.createClass({

  render: function () {
    return (
      <View style={styles.wrapper}>
        <ListView
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          renderRow={this._renderArtist}
        />
      </View>
    );
  },

  getInitialState: function () {
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.name !== r2.name }
    );
    return { 
      dataSource: dataSource,
    };
  },

  componentDidMount: function () {
    var artists = [];
    database.executeSQL(
      `
      SELECT
        Artist.ArtistId, 
        Artist.Name, 
        count(DISTINCT Album.AlbumId) as AlbumCount, 
        count(DISTINCT Track.TrackId) as TrackCount 
      FROM Artist
      JOIN Album ON Album.ArtistId = Artist.ArtistId
      JOIN Track ON Track.AlbumId = Album.AlbumId
      GROUP BY Artist.ArtistId
      ORDER BY Artist.Name
      `,
      [],
      (row) => {
        artists.push(row);
      },
      rethrowOr(() => this.setState({dataSource: this.state.dataSource.cloneWithRows(artists)})),
    );
  },

  _renderArtist: function (artist) {
    return (
      <TouchableHighlight onPress={() => this._selectArtist(artist)}>
        <View>
          <View style={styles.listItem}>
            <Text style={styles.listItemTitle}>{artist.Name}</Text>
            <Text style={styles.listItemSubtitle}>{artist.AlbumCount} albums, {artist.TrackCount} songs</Text>
          </View>
          <View style={styles.seperator}/>
        </View>
      </TouchableHighlight>
    );
  },

  _selectArtist: function (artist) {
    this.props.navigator.push(
      Routes.getRouteWithParams(
        Routes.ALBUMS,
        {artistID: artist.ArtistId}
      ),
    );
  }

});

var styles = StyleSheet.create({
  listItemSubtitle: {
    fontStyle: 'italic',
    fontSize: 10
  },
  listItem: {
    padding: 10
  },
  wrapper: {
    backgroundColor: '#F8F9E7',
    flex: 1,
    justifyContent: 'center',
  },
});

module.exports = AllArtistsView;
