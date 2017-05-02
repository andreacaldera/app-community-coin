import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import meta from './meta';
import asset from './asset';
import offer from './offer';
import request from './request';
import search from './search';
import nav from './nav';

import { NAMESPACE } from './constants';

const rootReducer = combineReducers({
  meta,
  asset,
  offer,
  request,
  search,
  nav,
});

module.exports = combineReducers({ routing: routerReducer, [NAMESPACE]: rootReducer });
