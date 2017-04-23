import { createSelector } from 'reselect';

import { getRootSelector } from '../selectors';

const getModuleSelector = createSelector(
  getRootSelector,
  ({ meta }) => meta
);

const getFeatureToggles = createSelector(
  getModuleSelector,
  ({ featureToggles }) => featureToggles
);

module.exports = {
  getFeatureToggles,
};
