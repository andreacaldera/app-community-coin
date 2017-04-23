import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Assets from './components/Assets';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="assets" component={Assets} />
    <Route path="contact-us" component={ContactUs} />
  </Route>
);

export default routes;
