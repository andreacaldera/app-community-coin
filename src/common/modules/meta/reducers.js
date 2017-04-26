import { combineReducers } from 'redux';

const featureToggles = (state = []) => state;

const environment = (state = []) => state;

module.exports = combineReducers({
  featureToggles,
  environment,
});
