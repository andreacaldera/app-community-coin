import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from '../modules';
import actionMiddleware from '../middleware';
import meta from '../modules/meta';

const configureStore = (history, initialState) => {
  const middlewares = [
    routerMiddleware(history),
    thunk,
    meta.getEnvironment(initialState) === 'development' ? createLogger : null,
    actionMiddleware,
  ];

  const middleware = applyMiddleware(...middlewares.filter(Boolean));

  const store = createStore(
    reducer,
    initialState,
    compose(middleware)
  );

  return store;
};


export default configureStore;
