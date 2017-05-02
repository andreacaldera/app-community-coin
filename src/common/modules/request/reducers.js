import { combineReducers } from 'redux';
import _ from 'lodash';

import { TOGGLE_REQUEST_DETAILS } from './constants';

const all = (state = []) => state;

const expanded = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_REQUEST_DETAILS: {
      const requestId = action.payload;
      return state.includes(requestId) ?
        _.without(state, requestId) :
        state.concat(requestId);
    }
    default:
      return state;
  }
};

module.exports = combineReducers({
  all,
  expanded,
});
