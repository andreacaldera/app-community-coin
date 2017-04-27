import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NavComponent from './Nav';

const Nav = React.createFactory(NavComponent);

const App = ({ children }) => (
  <div>
    {Nav()}
    <div className="main">
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default connect(null, null)(App);
