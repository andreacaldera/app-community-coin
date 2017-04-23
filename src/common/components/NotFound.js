import React from 'react';
import { connect } from 'react-redux';

const NotFound = () =>
  (<div>
    <h2>Not found</h2>
    <p>Sorry, the page your requested cannot be found.</p>
  </div>);

export default connect(null, null)(NotFound);
