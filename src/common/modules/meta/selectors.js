import { createSelector } from 'reselect';

import { getMetaSelector } from '../selectors';

const getFeatureToggles = createSelector(
  getMetaSelector,
  ({ featureToggles }) => featureToggles
);

const getEnvironment = createSelector(
  getMetaSelector,
  ({ environment }) => environment
);

module.exports = {
  getFeatureToggles,
  getEnvironment,
};
