import { combineReducers } from 'redux';
import _ from 'lodash';

import { TOGGLE_EVENT_DETAILS, TOGGLE_EVENT_RECOMMENDATIONS } from './constants';

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

const displayEventRecommendations = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_EVENT_RECOMMENDATIONS: return !state;
    default:
      return state;
  }
};

module.exports = combineReducers({
  all,
  expanded,
  displayEventRecommendations,
});
