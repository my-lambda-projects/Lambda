var SQLite = require('react-native-sqlite');

module.exports = {
  getMusicDB: () => SQLite.open("chinook.sqlite"),
};
