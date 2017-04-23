import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import search from '../modules/search';

const App = ({ children, searchTerm, setSearchTerm }) => (
  <div>
    <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <Link className="navbar-brand" to="/">Community Coin</Link>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/assets">Assets</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/requests">Requests</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/offers">Offers</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contribute</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <a className="dropdown-item disabled" href="/add/asset">Add asset</a>
              <a className="dropdown-item disabled" href="/add/request">Request item or service</a>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact-us">Contact us</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" value={searchTerm} onChange={setSearchTerm} />
        </form>
      </div>
    </nav>
    <div className="container">
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.shape().isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  searchTerm: search.getSearchTerm(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSearchTerm: (e) => {
    dispatch(search.setSearchTerm(e.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
