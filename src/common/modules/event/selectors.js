import { createSelector } from 'reselect';
import _ from 'lodash';

import { getEventSelector, getSearchSelector } from '../selectors';

const getAll = createSelector(
  getEventSelector,
  ({ all }) => all
);

const getExpanded = createSelector(
  getEventSelector,
  ({ expanded }) => expanded
);

const getList = createSelector(
  [getEventSelector, getSearchSelector],
  ({ all }, { searchTerm }) => {
    const list = _.values(all);
    return _.isEmpty(searchTerm) ?
      list :
      list.filter((asset) => asset.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1); // TODO build better and more performant search
  }
);

const getRecommendations = createSelector(
  getList,
  (list) => list.filter(({ recommended }) => recommended)
);

module.exports = {
  getAll,
  getList,
  getExpanded,
  getRecommendations,
};
