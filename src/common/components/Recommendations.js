import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router';

import asset from '../modules/asset';
import offer from '../modules/offer';
import search from '../modules/search';
import AssetComponent from '../components/Asset';
import OfferComponent from '../components/Offer';

const Asset = React.createFactory(AssetComponent);
const Offer = React.createFactory(OfferComponent);

const Recommendations = ({ assets, expandedAssets, offers, expandedOffers, searchTerm }) => {
  const noAssetsMessage = _.isEmpty(searchTerm) ?
    (<p>No assets recommendations available.</p>) :
    (<p>No assets found using search {searchTerm}.</p>);
  const assetElements = _.isEmpty(assets) ?
    noAssetsMessage :
    (assets.map((_asset) => Asset({ key: _asset.title, asset: _asset, expanded: expandedAssets.includes(_asset.id) })));

  const noOffersMessage = _.isEmpty(searchTerm) ?
    (<p>No offers recommendations available.</p>) :
    (<p>No offers found using search {searchTerm}.</p>);
  const offerElements = _.isEmpty(offers) ?
    noOffersMessage :
    (offers.map((_offer) => Offer({ key: _offer.title, offer: _offer, expanded: expandedOffers.includes(_offer.id) })));

  return (
    <div className="t-recommendations">
      <h2>Recommendations</h2>
      <h3>Assets <Link to="/assets">view more</Link></h3>
      {assetElements}

      <h3>Offers <Link to="/offers">view more</Link></h3>
      {offerElements}
    </div>
  );
};

Recommendations.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  expandedAssets: PropTypes.arrayOf(PropTypes.number).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  expandedOffers: PropTypes.arrayOf(PropTypes.number).isRequired,
  searchTerm: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  assets: asset.getRecommendations(state),
  expandedAssets: asset.getExpanded(state),
  offers: offer.getRecommendations(state),
  expandedOffers: offer.getExpanded(state),
  searchTerm: search.getSearchTerm(state),
});

export default connect(mapStateToProps, null)(Recommendations);
