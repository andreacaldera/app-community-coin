import { createSelector } from 'reselect';
import _ from 'lodash';

import { getRequestSelector, getSearchSelector } from '../selectors';

const getAll = createSelector(
  getRequestSelector,
  ({ all }) => all
);

const getExpanded = createSelector(
  getRequestSelector,
  ({ expanded }) => expanded
);

const getList = createSelector(
  [getRequestSelector, getSearchSelector],
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

const getDisplayRequestRecommendations = createSelector(
  getRequestSelector,
  ({ displayRequestRecommendations }) => displayRequestRecommendations
);

module.exports = {
  getAll,
  getList,
  getExpanded,
  getRecommendations,
  getDisplayRequestRecommendations,
};
