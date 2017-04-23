import { combineReducers } from 'redux';

import { SET_SEARCH_TERM } from './constants';

const searchTerm = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TERM: return action.payload;
    default: return state;
  }
};

module.exports = combineReducers({
  searchTerm,
});
