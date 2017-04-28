import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Recommendations from './components/Recommendations';
import Assets from './components/Assets';
import Requests from './components/Requests';
import Offers from './components/Offers';
import NotFound from './components/NotFound';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Recommendations} />
    <Route path="assets" component={Assets} />
    <Route path="offers" component={Offers} />
    <Route path="requests" component={Requests} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
