/**
 * Example of using react-native-sqlite
 */
'use strict';

const React = require('react-native');
const {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  RecyclerViewBackedScrollView,
  TextInput,
  ListView,
} = React;
const SideMenu = require('react-native-side-menu');
const deviceScreen = Dimensions.get('window');

const QueryView = require('./src/js/views/QueryView');
const AlbumsView = require('./src/js/views/AlbumsView');
const AllArtistsView = require('./src/js/views/AllArtistsView');
const Routes = require('./src/js/constants/Routes');
const Colors = require('./src/js/constants/Colors');

const NAV_BAR_HEIGHT = 44;
const SPACER_HEIGHT = 24;

const INITIAL_ROUTE = Routes.QUERY;

const _navBarRouteMapper = {

  Title: function(route, navigator) {
    var content = this.getTitleForRoute(route, navigator);
    return (
      <View style={{paddingTop: 10}}>
        {content}
      </View>
    );
  },

  getTitleForRoute: function(route, navigator) {
    switch (route.id) {
      case Routes.ALL_ARTISTS:
        return <Text>Artists</Text>;
      case Routes.QUERY:
        return <Text>Query DB</Text>;
      case Routes.ALBUMS:
        return <Text>Albums</Text>;
    }
    throw new Error('No title for route' + route.id);
  },

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }
    var belowRoute = navState.routeStack[index-1];
    return (
      <TouchableOpacity onPress={() => navigator.popToRoute(belowRoute)}>
        <View style={{paddingTop: 10, paddingLeft: 10}}>
          <Text style={{color: '#0076FF'}}>
            {_navBarRouteMapper.getTitleForRoute(belowRoute)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator) {
  },
};

class MenuView extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+Control+Z for dev menu
        </Text>
      </View>
    );
  }
}

var SQLSandbox = React.createClass({

  renderScene: function(route, navigator) {
    var menu = <MenuView />;
    return (
      <View style={styles.metaContainer}>
        <SideMenu 
          menu={menu} 
          openMenuOffset={deviceScreen.width * 1 / 3}>
          <View style={styles.viewContainer}>
            {this.renderSceneImpl(route, navigator)}
          </View>
        </SideMenu>
      </View>
    );
  },

  renderSceneImpl: function(route, navigator) {
    switch (route.id) {
      case Routes.ALL_ARTISTS:
        return <AllArtistsView navigator={navigator} />;
      case Routes.QUERY:
        return <QueryView navigator={navigator} />;
      case Routes.ALBUMS:
        return (
          <AlbumsView
            navigator={navigator} 
            artistID={route.artistID}
          />
        );
    }
    throw new Error('No route found for ' + route.id);
  },

  render: function() {
    return (
      <Navigator
        style={styles.container}
        renderScene={this.renderScene}
        initialRoute={Routes.getRouteForID(INITIAL_ROUTE)}
        navigationBar={
          <Navigator.NavigationBar 
            style={styles.navBarContainer}
            routeMapper={_navBarRouteMapper}
          />
        }
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    marginTop: 44 + 20,
    flex: 1,
  },
  metaContainer: {
    backgroundColor: '#333',
    flex: 1,
  },
  navBarContainer: {
    backgroundColor: Colors.SHADE2,
  },
});

AppRegistry.registerComponent('SQLSandbox', () => SQLSandbox);
