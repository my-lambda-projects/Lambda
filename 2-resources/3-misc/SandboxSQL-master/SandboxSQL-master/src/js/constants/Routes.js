var keyMirror = require('../utils/keyMirror');

module.exports = keyMirror({
  QUERY: null,
  ALL_ARTISTS: null,
  ALBUMS: null,
  TRACK: null,
});

module.exports.getRouteWithParams = function(id, params) {
  // clean this up maybe with assign?
  params.id = id;
  return params;
};

module.exports.getRouteForID = function(id) {
  return { id };
};
