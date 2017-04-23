import React from 'react';
import { connect } from 'react-redux';

import WorkInProgressComponent from './WorkInProgress';

const WorkInProgress = React.createFactory(WorkInProgressComponent);

const Requests = () =>
  (<div>
    <h2>Requests</h2>
    {WorkInProgress()}
  </div>);

export default connect(null, null)(Requests);
