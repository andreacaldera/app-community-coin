import { combineReducers } from 'redux';
import _ from 'lodash';

import { TOGGLE_ASSET_DETAILS, TOGGLE_ASSET_RECOMMENDATIONS } from './constants';

const all = (state = []) => state;

const expanded = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_ASSET_DETAILS: {
      const assetId = action.payload;
      return state.includes(assetId) ?
        _.without(state, assetId) :
        state.concat(assetId);
    }
    default:
      return state;
  }
};

const displayAssetRecommendations = (state = true, action) => {
  switch (action.type) {
    case TOGGLE_ASSET_RECOMMENDATIONS: return !state;
    default:
      return state;
  }
};

module.exports = combineReducers({
  all,
  expanded,
  displayAssetRecommendations,
});
