import React from 'react';
import { connect } from 'react-redux';

import AssetsComponent from '../components/Assets';
import OffersComponent from '../components/Offers';
import RequestsComponent from '../components/Requests';
import EventsComponent from '../components/Events';

const Assets = React.createFactory(AssetsComponent);
const Offers = React.createFactory(OffersComponent);
const Requests = React.createFactory(RequestsComponent);
const Events = React.createFactory(EventsComponent);

const Recommendations = () => (
  <div className="t-recommendations">
    <h2>Recommendations</h2>
    <label htmlFor="assetsFilter" className="custom-control custom-checkbox">
      <input type="checkbox" className="custom-control-input" />
      <span className="custom-control-indicator" />
      <span className="custom-control-description">Check this custom checkbox</span>
    </label>
    {Assets({ displayRecommendations: true })}
    {Offers({ displayRecommendations: true })}
    {Requests({ displayRecommendations: true })}
    {Events({ displayRecommendations: true })}
  </div>
);

export default connect(null, null)(Recommendations);
