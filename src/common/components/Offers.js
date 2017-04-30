import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import offerModule from '../modules/offer';
import searchModule from '../modules/search';

import OfferComponent from '../components/Offer';

const Offer = React.createFactory(OfferComponent);

const Offers = ({ offers, expanded, searchTerm }) => {
  const noOfferElement = _.isEmpty(searchTerm) ?
    (<p>No offers available yet.</p>) :
    (<p>No offers found using search {searchTerm}.</p>);

  const offerElements = _.isEmpty(offers) ?
    noOfferElement :
    (offers.map((_offer) => Offer({ key: _offer.title, offer: _offer, expanded: expanded.includes(_offer.id) })));
  return (
    <div className="offers">
      <h2>Offers</h2>
      {offerElements}
    </div>
  );
};

Offers.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  expanded: PropTypes.arrayOf(PropTypes.number).isRequired,
  searchTerm: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: offerModule.getList(state),
  expanded: offerModule.getExpanded(state),
  searchTerm: searchModule.getSearchTerm(state),
});

export default connect(mapStateToProps, null)(Offers);
