import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import metaModule from './meta';
import assetModule from './asset';
import offerModule from './offer';
import requestModule from './request';
import eventModule from './event';
import searchModule from './search';
import navModule from './nav';

import { NAMESPACE } from './constants';

const rootReducer = combineReducers({
  meta: metaModule,
  asset: assetModule,
  offer: offerModule,
  request: requestModule,
  event: eventModule,
  search: searchModule,
  nav: navModule,
});

module.exports = combineReducers({ routing: routerReducer, [NAMESPACE]: rootReducer });
