var keyMirror = require('../utils/keyMirror');

var CHANGE_EVENT = 'change';

module.exports = {

  CHANGE_EVENT: CHANGE_EVENT,

  StoreSubscribePrototype: {
    subscribe: function(cb) {
      this.on(CHANGE_EVENT, cb);
    },

    unsubscribe: function(cb) {
      this.removeListener(CHANGE_EVENT, cb);
    }
  },

  ActionTypes: keyMirror({
    ADD_TOKEN: null,
    DELETE_TOKEN: null,
    DECREMENT_INSERT_INDEX: null,
    INCREMENT_INSERT_INDEX: null,
    CLEAR_TOKENS: null,
    UPDATE_INSERT_INDEX: null,
  }),

  PayloadSources: keyMirror({
    VIEW_ACTION: null,
    SERVER_ACTION: null
  })
};
