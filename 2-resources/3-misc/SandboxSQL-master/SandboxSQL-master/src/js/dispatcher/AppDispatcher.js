'use strict';

var AppConstants = require('../constants/AppConstants');
var Dispatcher = require('flux').Dispatcher;

var PayloadSources = AppConstants.PayloadSources;

var AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function(action) {
  this.dispatch({
    source: PayloadSources.VIEW_ACTION,
    action: action
  });
};

AppDispatcher.handleServerAction = function(action) {
  this.dispatch({
    source: PayloadSources.SERVER_ACTION,
    action: action
  });
};

module.exports = AppDispatcher;
