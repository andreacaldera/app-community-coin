import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import offerModule from '../modules/offer';

const Offer = ({ offer, expanded, toggleOfferDetails }) => (
  <div className="offer">
    <a href="/offers" className="row offer__header" onClick={(e) => toggleOfferDetails(e, offer.id)}>
      <div className="offer__thumbnail col">
        <center>
          <img className="offer__header__image" alt={offer.title} src={offer.thumbnail} />
        </center>
      </div>
      <div className="col-9">{offer.title}</div>
      <div className="col offer__thumbnail"><img className="offer__user-avatar" alt={offer.user.name} src={offer.user.avatar} /></div>
    </a>
    <div className={`offer__details ${(expanded ? '' : 'sr-only')}`}>
      <div className="row">
        <div className="col">{offer.description}</div>
        <div className="col">
          ({offer.image.map((offerImage) => (<img key={offerImage} className="offer__details__image" alt={offer.title} src={offerImage} />))})
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
