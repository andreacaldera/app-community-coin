import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Assets from './components/Assets';
import Requests from './components/Requests';
import Offers from './components/Offers';
import NotFound from './components/NotFound';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="assets" component={Assets} />
    <Route path="offers" component={Offers} />
    <Route path="requests" component={Requests} />
    <Route path="contact-us" component={ContactUs} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
