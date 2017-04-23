import React from 'react';
import { connect } from 'react-redux';

import WorkInProgressComponent from './WorkInProgress';

const WorkInProgress = React.createFactory(WorkInProgressComponent);

const Offers = () =>
  (<div>
    <h2>Offers</h2>
    {WorkInProgress()}
  </div>);

export default connect(null, null)(Offers);
