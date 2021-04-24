"use strict";

var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var ActionTypes = AppConstants.ActionTypes;
class PartialQueryActions {
  static addToken(token) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.ADD_TOKEN,
      token: token,
    });
  }

  static deleteToken(token) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.DELETE_TOKEN,
      token: token,
    });
  }

  static updateInsertIndex(newIndex) {
    AppDispatcher.handleViewAction({
      type: ActionTypes.UPDATE_INSERT_INDEX,
      newIndex: newIndex
    });
  }

  static incrementInsertIndex() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.INCREMENT_INSERT_INDEX,
    });
  }

  static decrementInsertIndex() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.DECREMENT_INSERT_INDEX,
    });
  }

  static clearTokens() {
    AppDispatcher.handleViewAction({
      type: ActionTypes.CLEAR_TOKENS,
    });
  }
  
}

module.exports = PartialQueryActions;
