import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const WorkInProgress = () => (
  <div>
    <p>This section is currently being built, please <Link to="/contact-us">contact</Link> us for more information.</p>
  </div>
);

module.exports = connect(null, null)(WorkInProgress);
