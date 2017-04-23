import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import meta from './meta';
import asset from './asset';

import { NAMESPACE } from './constants';

const rootReducer = combineReducers({
  meta,
  asset,
});

module.exports = combineReducers({ routing: routerReducer, [NAMESPACE]: rootReducer });
