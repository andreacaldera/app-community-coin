import { combineReducers } from 'redux';
import _ from 'lodash';

import { TOGGLE_EVENT_DETAILS } from './constants';

const all = (state = []) => state;

const expanded = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_EVENT_DETAILS: {
      const eventId = action.payload;
      return state.includes(eventId) ?
        _.without(state, eventId) :
        state.concat(eventId);
    }
    default:
      return state;
  }
};

module.exports = combineReducers({
  all,
  expanded,
});
