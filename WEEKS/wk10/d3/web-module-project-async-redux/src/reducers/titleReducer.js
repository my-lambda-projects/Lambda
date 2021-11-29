import { UPDATE_TITLE } from '../actions';

const initialState = {
  title: 'Dragon Club Members'
};

export function titleReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
}
