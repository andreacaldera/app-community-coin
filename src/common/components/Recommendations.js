import React from 'react';
import { connect } from 'react-redux';

import AssetsComponent from '../components/Assets';
import OffersComponent from '../components/Offers';
import RequestsComponent from '../components/Requests';

const Assets = React.createFactory(AssetsComponent);
const Offers = React.createFactory(OffersComponent);
const Requests = React.createFactory(RequestsComponent);

const Recommendations = () => (
  <div className="t-recommendations">
    <h2>Recommendations</h2>
    {Assets({ displayRecommendations: true })}
    {Offers({ displayRecommendations: true })}
    {Requests({ displayRecommendations: true })}
  </div>
);

export default connect(null, null)(Recommendations);
