import { createSelector } from 'reselect';

import { NAMESPACE } from './constants';

const getRootSelector = (state) => state[NAMESPACE];

const getSearchSelector = createSelector(
  getRootSelector,
  ({ search }) => search
);

const getMetaSelector = createSelector(
  getRootSelector,
  ({ meta }) => meta
);

const getAssetSelector = createSelector(
  getRootSelector,
  ({ asset }) => asset
);

const getNavSelector = createSelector(
  getRootSelector,
  ({ nav }) => nav
);

module.exports = {
  getRootSelector,
  getSearchSelector,
  getMetaSelector,
  getAssetSelector,
  getNavSelector,
};
