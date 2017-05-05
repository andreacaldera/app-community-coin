import { TOGGLE_OFFER_DETAILS, TOGGLE_OFFER_RECOMMENDATIONS } from './constants';

const toggleOfferDetails = (payload) => ({
  type: TOGGLE_OFFER_DETAILS,
  payload,
});

const toggleOfferRecommendations = () => ({
  type: TOGGLE_OFFER_RECOMMENDATIONS,
});

module.exports = {
  toggleOfferDetails,
  toggleOfferRecommendations,
};
