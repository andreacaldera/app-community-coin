import React from 'react';
import { connect } from 'react-redux';

import WorkInProgressComponent from './WorkInProgress';

const WorkInProgress = React.createFactory(WorkInProgressComponent);

const About = () =>
  (<div>
    <h2>About us</h2>
    {WorkInProgress()}
  </div>);

export default connect(null, null)(About);
