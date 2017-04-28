import { combineReducers } from 'redux';
import _ from 'lodash';

import { TOGGLE_OFFER_DETAILS } from './constants';

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

module.exports = combineReducers({
  all,
  expanded,
});
