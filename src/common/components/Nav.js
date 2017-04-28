import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

import search from '../modules/search';
import nav from '../modules/nav';

const Nav = ({ searchTerm, setSearchTerm, isMenuOpened, toggleMenu }) =>
  (<nav className="navbar navbar-toggleable-md navbar-inverse fixed-top">
    <button className="navbar-toggler navbar-toggler-right" type="button" onClick={toggleMenu}>
      <span className="navbar-toggler-icon" />
    </button>
    <Link className="navbar-brand" to="/">Community Coin</Link>

    <form className="navbar__search-form-mobile pull-right form-inline my-2 my-lg-0" onSubmit={(e) => e.preventDefault()}>
      <input className="form-control mr-sm-2" type="text" placeholder="Search" value={searchTerm} onChange={setSearchTerm} />
    </form>

    <div className={`collapse navbar-collapse ${isMenuOpened ? 'show' : 'collapse'}`}>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" className="nav-link" to="/assets">Assets</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/requests">Requests</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/offers">Offers</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contribute</a>
          <div className="dropdown-menu" aria-labelledby="dropdown01">
            <a className="dropdown-item disabled" href="/add/asset">Add asset</a>
            <a className="dropdown-item disabled" href="/add/request">Request item or service</a>
          </div>
        </li>
      </ul>
      <form className="navbar__search-form orm-inline my-2 my-lg-0" onSubmit={(e) => e.preventDefault()}>
        <input className="form-control mr-sm-2" type="text" placeholder="Search" value={searchTerm} onChange={setSearchTerm} />
      </form>
    </div>
  </nav>);

Nav.propTypes = {
  children: PropTypes.shape().isRequired,
  searchTerm: PropTypes.string.isRequired,
  isMenuOpened: PropTypes.bool.isRequired,

  setSearchTerm: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  searchTerm: search.getSearchTerm(state),
  isMenuOpened: nav.isMenuOpened(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSearchTerm: (e) => {
    dispatch(search.setSearchTerm(e.target.value));
  },
  toggleMenu: (e) => {
    e.preventDefault();
    dispatch(nav.toggleMenu());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
