import React from 'react';
import { connect } from 'react-redux';

const About = () =>
  (<div>
    <h2>About us</h2>
    <strong>What is this app for?</strong>
    <p>To support fun, biodiverse, eco-friendly, healthy, entrepreneurial, sustainable and resilient communities by maximising altruism and cooperation.<br />
    We want to make it easy and rewarding to keep wealth, skills and decision making as local as possible, but always with a global outlook.<br />
    This app is underpinned by blockchain technology which democratises currency and makes it easier to trust each other.</p>
  </div>);

export default connect(null, null)(About);
