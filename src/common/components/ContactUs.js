import React from 'react';
import { connect } from 'react-redux';

const ContactUs = () =>
  (<div className="t-contact-us">
    <h2>Contact us</h2>
    <p>Let us know your feedback and suggestions!</p>
    <ul>
      <li><a href="mailto:#">Piers</a></li>
      <li><a href="mailto:#">Adriaan</a></li>
      <li><a href="mailto:andrea.caldera@gmail.com">Andrea</a></li>
    </ul>
  </div>);

export default connect(null, null)(ContactUs);
