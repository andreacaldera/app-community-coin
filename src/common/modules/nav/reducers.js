import { combineReducers } from 'redux';

import { REDUX_LOCATION_CHANGE, TOGGLE_MENU } from './constants';

const menuOpened = (state = false, action) => {
  switch (action.type) {
    case REDUX_LOCATION_CHANGE: return false;
    case TOGGLE_MENU: return !state;
    default: return state;
  }
};

module.exports = combineReducers({
  menuOpened,
});
