import { createSelector } from 'reselect';

import { getMetaSelector } from '../selectors';

const getFeatureToggles = createSelector(
  getMetaSelector,
  ({ featureToggles }) => featureToggles
);

module.exports = {
  getFeatureToggles,
};
