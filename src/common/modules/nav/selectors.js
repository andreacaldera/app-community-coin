import { createSelector } from 'reselect';

import { getNavSelector } from '../selectors';

const isMenuOpened = createSelector(
  getNavSelector,
  ({ menuOpened }) => menuOpened
);

module.exports = {
  isMenuOpened,
};
