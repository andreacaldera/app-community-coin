import { createSelector } from 'reselect';
import _ from 'lodash';

import { getOfferSelector, getSearchSelector } from '../selectors';

const getAll = createSelector(
  getOfferSelector,
  ({ all }) => all
);

const getExpanded = createSelector(
  getOfferSelector,
  ({ expanded }) => expanded
);

const getList = createSelector(
  [getOfferSelector, getSearchSelector],
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

const getDisplayOfferRecommendations = createSelector(
  getOfferSelector,
  ({ displayOfferRecommendations }) => displayOfferRecommendations
);

module.exports = {
  getAll,
  getList,
  getExpanded,
  getRecommendations,
  getDisplayOfferRecommendations,
};
