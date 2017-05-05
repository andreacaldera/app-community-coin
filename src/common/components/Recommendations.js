import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AssetsComponent from '../components/Assets';
import OffersComponent from '../components/Offers';
import RequestsComponent from '../components/Requests';
import EventsComponent from '../components/Events';

import assetModule from '../modules/asset';
import requestModule from '../modules/request';
import eventModule from '../modules/event';
import offerModule from '../modules/offer';

const Assets = React.createFactory(AssetsComponent);
const Offers = React.createFactory(OffersComponent);
const Requests = React.createFactory(RequestsComponent);
const Events = React.createFactory(EventsComponent);

const Recommendations = ({
  toggleAssetsFilter,
  displayAssetRecommendations,
  toggleOffersFilter,
  displayOfferRecommendations,
  toggleRequestsFilter,
  displayRequestRecommendations,
  toggleEventsFilter,
  displayEventRecommendations,
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

    {displayAssetRecommendations ? Assets({ displayRecommendations: true }) : null}
    {displayOfferRecommendations ? Offers({ displayRecommendations: true }) : null}
    {displayRequestRecommendations ? Requests({ displayRecommendations: true }) : null}
    {displayEventRecommendations ? Events({ displayRecommendations: true }) : null}
  </div>
);

Recommendations.propTypes = {
  toggleAssetsFilter: PropTypes.func.isRequired,
  displayAssetRecommendations: PropTypes.bool.isRequired,
  toggleOffersFilter: PropTypes.func.isRequired,
  displayOfferRecommendations: PropTypes.bool.isRequired,
  toggleEventsFilter: PropTypes.func.isRequired,
  displayEventRecommendations: PropTypes.bool.isRequired,
  toggleRequestsFilter: PropTypes.func.isRequired,
  displayRequestRecommendations: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  displayAssetRecommendations: assetModule.getDisplayAssetRecommendations(state),
  displayOfferRecommendations: offerModule.getDisplayOfferRecommendations(state),
  displayEventRecommendations: eventModule.getDisplayEventRecommendations(state),
  displayRequestRecommendations: requestModule.getDisplayRequestRecommendations(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleAssetsFilter: (e) => {
    e.preventDefault();
    dispatch(assetModule.toggleAssetRecommendations());
  },
  toggleRequestsFilter: (e) => {
    e.preventDefault();
    dispatch(requestModule.toggleRequestRecommendations());
  },
  toggleEventsFilter: (e) => {
    e.preventDefault();
    dispatch(eventModule.toggleEventRecommendations());
  },
  toggleOffersFilter: (e) => {
    e.preventDefault();
    dispatch(offerModule.toggleOfferRecommendations());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);
