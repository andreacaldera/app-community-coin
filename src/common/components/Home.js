import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Home = () =>
(<div>
  <h2>Welcome to Community Coin!</h2>
</div>);

Home.propTypes = {
  testMeta: PropTypes.string.isRequired,
};

const mapStateToProps = (/* state */) => ({
});

const mapDispatchToProps = (/* dispatch */) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
