import Express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createMemoryHistory, match, RouterContext } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import featureToggles from './middleware/feature-toggles';
import asset from './middleware/asset';
import configureStore from '../common/store/configureStore';
import routes from '../common/routes';
import { NAMESPACE } from '../common/modules/constants';

const app = Express();
const port = process.env.PORT || 3001;

app.use(cookieParser());
app.use('/', Express.static(path.join(__dirname, '../../dist')));
app.use('/images', Express.static(path.join(__dirname, '../../images')));

const renderFullPage = (content, store) =>
  `<!doctype html>
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="/communitycoin.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
      <title>Community Coin</title>
      </head>
      <body>
        <div id="app">${content}</div>
        <script>window.__initialState__ = ${JSON.stringify(store.getState()).replace(/</g, '\\x3c')}</script>
        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
        <script src="/communitycoin.js"></script>
      </body>
    </html>`;

const getPreloadedState = (req, res, next) => {
  // TODO review this callbacks hell
  featureToggles(req, res, () =>
    asset.getAssets(req, res, () => {
      res.locals.preloadedState = {
        [NAMESPACE]: {
          meta: {
            featureToggles: res.locals.featureToggles,
            environment: process.env.NODE_ENV || 'production',
          },
          asset: { all: res.locals.asset.all },
        },
      };
      next();
    })
  );
};

app.use((req, res) => {
  getPreloadedState(req, res, () => {
    const memoryHistory = createMemoryHistory(req.url);
    const store = configureStore(memoryHistory, res.locals.preloadedState);
    const history = syncHistoryWithStore(memoryHistory, store);

    match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        const content = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );
        res.send(renderFullPage(content, store));
      }
    });
  });
});

app.listen(port, (error) => {
  if (error) {
    console.error(error); // eslint-disable-line no-console
  } else {
    console.info(`App running at http://localhost:${port}/`); // eslint-disable-line no-console
  }
});
