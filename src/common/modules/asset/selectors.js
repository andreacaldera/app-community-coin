import { createSelector } from 'reselect';
import _ from 'lodash';

import { getRootSelector } from '../selectors';

const getModuleSelector = createSelector(
  getRootSelector,
  ({ asset }) => asset
);

const getAll = createSelector(
  getModuleSelector,
  ({ all }) => all
);

const getExpanded = createSelector(
  getModuleSelector,
  ({ expanded }) => expanded
);

const getList = createSelector(
  getModuleSelector,
  ({ all }) => _.values(all)
);

module.exports = {
  getAll,
  getList,
  getExpanded,
};
