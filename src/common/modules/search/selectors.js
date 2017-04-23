import { createSelector } from 'reselect';

import { getSearchSelector } from '../selectors';

const getSearchTerm = createSelector(
  getSearchSelector,
  ({ searchTerm }) => searchTerm
);

module.exports = {
  getSearchTerm,
};
