import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router';

import offerModule from '../modules/offer';
import searchModule from '../modules/search';

import OfferComponent from '../components/Offer';

const Offer = React.createFactory(OfferComponent);

const Offers = ({ recommendations, offers, expanded, searchTerm, displayRecommendations }) => {
  const noOfferElement = _.isEmpty(searchTerm) ?
    (<p>No {displayRecommendations ? 'recommended' : ''} offers available yet.</p>) :
    (<p>No {displayRecommendations ? 'recommended' : ''} offers found using search {searchTerm}.</p>);

  const offersList = displayRecommendations ? recommendations : offers;

  const offerElements = _.isEmpty(offersList) ?
    noOfferElement :
    (offersList.map((_offer) => Offer({ key: _offer.title, offer: _offer, expanded: expanded.includes(_offer.id) })));
  return (
    <div className="offers">
      <h3>
        <div className="row">
          <div className="col">Offers
            {(displayRecommendations ? <Link className="view-more" to="/offers">view more</Link> : null)}
          </div>
        </div>
      </h3>
      {offerElements}
    </div>
  );
};

Offers.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  recommendations: PropTypes.arrayOf(PropTypes.shape()),
  expanded: PropTypes.arrayOf(PropTypes.number).isRequired,
  searchTerm: PropTypes.string.isRequired,
  displayRecommendations: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  offers: offerModule.getList(state),
  recommendations: offerModule.getRecommendations(state),
  expanded: offerModule.getExpanded(state),
  searchTerm: searchModule.getSearchTerm(state),
});

export default connect(mapStateToProps, null)(Offers);
