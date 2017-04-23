import { SET_SEARCH_TERM } from './constants';

const setSearchTerm = (payload) => ({
  type: SET_SEARCH_TERM,
  payload,
});

module.exports = {
  setSearchTerm,
};
