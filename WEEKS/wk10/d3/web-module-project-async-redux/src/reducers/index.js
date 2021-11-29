import { combineReducers } from 'redux';
import { titleReducer as title } from './titleReducer';
import { friendsReducer } from './friendsReducer';

export default combineReducers({
  title,
  friendsReducer
});
