import { combineReducers } from 'redux';
import _ from 'lodash';

import { TOGGLE_OFFER_DETAILS, TOGGLE_OFFER_RECOMMENDATIONS } from './constants';

const all = (state = []) => state;

const expanded = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_OFFER_DETAILS: {
      const offerId = action.payload;
      return state.includes(offerId) ?
        _.without(state, offerId) :
        state.concat(offerId);
    }
    default:
      return state;
  }
};

const displayOfferRecommendations = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_OFFER_RECOMMENDATIONS: return !state;
    default:
      return state;
  }
};

module.exports = combineReducers({
  all,
  expanded,
  displayOfferRecommendations,
});
