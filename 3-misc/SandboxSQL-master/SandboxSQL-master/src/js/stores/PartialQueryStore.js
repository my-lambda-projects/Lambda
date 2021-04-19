"use strict";

var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var PartialQuery = require('../query/PartialQuery');
var EventEmitter = require('events').EventEmitter;

var ActionTypes = AppConstants.ActionTypes;

var assign = require('object-assign');

/**
 * This store holds partial queries that are
 * based on tokens.
 *
 * Right now there is only one "global" query but
 * that might change in the future.
 */

var _query = new PartialQuery();
var _resetState = function() {
  _query.reset();
};
_resetState();

var PartialQueryStore = assign(
{},
EventEmitter.prototype,
AppConstants.StoreSubscribePrototype,
{
 
  getNumTokens() {
    return _query.getNumTokens();
  },

  getInsertIndex() {
    return _query.getInsertIndex();
  },

  getTokens() {
    return _query.getTokens();
  },

  exportToStringQuery() {
    return _query.exportToStringQuery();
  },

  dispatchToken: AppDispatcher.register((payload) => {
    var action = payload.action;
    var shouldInform = false;

    switch (action.type) {
      case ActionTypes.ADD_TOKEN:
        shouldInform = true;
        _query.addToken(action.token);
        break;

      case ActionTypes.DELETE_TOKEN:
        if (!_query.getNumTokens()) {
          break;
        }
        shouldInform = true;
        _query.deleteToken();
        break;

      case ActionTypes.UPDATE_INSERT_INDEX:
        shouldInform = true;
        _query.updateInsertIndex(action.newIndex);
        break;

      case ActionTypes.INCREMENT_INSERT_INDEX:
        shouldInform = true;
        _query.incrementInsertIndex();
        break;

      case ActionTypes.DECREMENT_INSERT_INDEX:
        shouldInform = true;
        _query.decrementInsertIndex();
        break;

      case ActionTypes.CLEAR_TOKENS:
        shouldInform = true;
        _resetState();
        break;
    }

    if (shouldInform) {
      PartialQueryStore.emit(AppConstants.CHANGE_EVENT);
    }
  }),
});

module.exports = PartialQueryStore;
