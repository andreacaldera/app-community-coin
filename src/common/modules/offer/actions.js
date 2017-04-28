import { TOGGLE_OFFER_DETAILS } from './constants';

const toggleOfferDetails = (payload) => ({
  type: TOGGLE_OFFER_DETAILS,
  payload,
});

module.exports = {
  toggleOfferDetails,
};
