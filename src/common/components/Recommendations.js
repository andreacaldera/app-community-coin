import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AssetsComponent from '../components/Assets';
import OffersComponent from '../components/Offers';
import RequestsComponent from '../components/Requests';
import EventsComponent from '../components/Events';

import assetModule from '../modules/asset';

const Assets = React.createFactory(AssetsComponent);
const Offers = React.createFactory(OffersComponent);
const Requests = React.createFactory(RequestsComponent);
const Events = React.createFactory(EventsComponent);

const Recommendations = ({
  toggleAssetsFilter,
  assetRecommenations,
  toggleOffersFilter,
  toggleRequestsFilter,
  toggleEventsFilter,
}) => (
  <div className="t-recommendations">
    <h2>Recommendations</h2>
    <div className="filter row">
      <div className="col-lg-6">
        <button className="filter__button asset btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={toggleAssetsFilter}>Assets</button>
        <button className="filter__button btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={toggleOffersFilter}>Offers</button>
      </div>
      <div className="col-lg-6">
        <button className="filter__button btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={toggleRequestsFilter}>Requests</button>
        <button className="filter__button btn btn-primary btn-lg active" role="button" aria-pressed="true" onClick={toggleEventsFilter}>Events</button>
      </div>
    </div>

    {assetRecommenations ? Assets({ displayRecommendations: true }) : null}
    {Offers({ displayRecommendations: true })}
    {Requests({ displayRecommendations: true })}
    {Events({ displayRecommendations: true })}
  </div>
);

Recommendations.propTypes = {
  toggleAssetsFilter: PropTypes.func.isRequired,
  assetRecommenations: PropTypes.bool.isRequired,
  toggleOffersFilter: PropTypes.func.isRequired,
  toggleEventsFilter: PropTypes.func.isRequired,
  toggleRequestsFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  assetRecommenations: assetModule.getAssetRecommendations(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleAssetsFilter: (e) => {
    e.preventDefault();
    dispatch(assetModule.toggleAssetRecommendations());
  },
  toggleRequestsFilter: (e) => {
    e.preventDefault();
  },
  toggleEventsFilter: (e) => {
    e.preventDefault();
  },
  toggleOffersFilter: (e) => {
    e.preventDefault();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);
