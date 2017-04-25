import React from 'react';
import { connect } from 'react-redux';

const Home = () =>
(<div className="t-home">
  <h2>Welcome to Community Coin!</h2>
  <p>Some content here</p>
</div>);

export default connect(null, null)(Home);
