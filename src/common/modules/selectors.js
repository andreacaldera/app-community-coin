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

const getOfferSelector = createSelector(
  getRootSelector,
  ({ offer }) => offer
);

const getRequestSelector = createSelector(
  getRootSelector,
  ({ request }) => request
);

const getEventSelector = createSelector(
  getRootSelector,
  ({ event }) => event
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
  getOfferSelector,
  getRequestSelector,
  getEventSelector,
  getNavSelector,
};
