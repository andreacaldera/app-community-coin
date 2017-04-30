import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import offerModule from '../modules/offer';

const Offer = ({ offer, expanded, toggleOfferDetails }) => (
  <div className="offer">
    <a href="/offers" className="row offer__header" onClick={(e) => toggleOfferDetails(e, offer.id)}>
      <div className="col">
        <center className="offer__thumbnail-container">
          <img className="offer__thumbnail" alt={offer.title} src={offer.thumbnail} />
        </center>
      </div>
      <div className="col-10 offer__title">{offer.title}</div>
      <div className="col offer__header__price">{offer.price} CC</div>
    </a>
    <div className={`offer__details ${(expanded ? '' : 'sr-only')}`}>
      <div className="row">
        <div className="col">
          <span><img className="offer__thumbnail" alt={offer.user.name} src={offer.user.avatar} /></span>
          <span>{offer.description}</span>
        </div>
        <div className="col">
          {offer.image.map((offerImage) => <img key={offerImage} className="offer__details__image" alt={offer.title} src={offerImage} />)}
        </div>
      </div>
    </div>
  </div>
);

Offer.propTypes = {
  offer: PropTypes.shape().isRequired,
  expanded: PropTypes.bool.isRequired,
  toggleOfferDetails: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleOfferDetails: (e, offerId) => {
    e.preventDefault();
    dispatch(offerModule.toggleOfferDetails(offerId));
  },
});

export default connect(null, mapDispatchToProps)(Offer);
