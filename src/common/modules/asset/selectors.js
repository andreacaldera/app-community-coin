import { createSelector } from 'reselect';
import _ from 'lodash';

import { getAssetSelector, getSearchSelector } from '../selectors';

const getAll = createSelector(
  getAssetSelector,
  ({ all }) => all
);

const getExpanded = createSelector(
  getAssetSelector,
  ({ expanded }) => expanded
);

const getList = createSelector(
  [getAssetSelector, getSearchSelector],
  ({ all }, { searchTerm }) => {
    const list = _.values(all);
    return _.isEmpty(searchTerm) ?
      list :
      list.filter((asset) => asset.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1); // TODO build better and more performant search
  }
);

module.exports = {
  getAll,
  getList,
  getExpanded,
};
