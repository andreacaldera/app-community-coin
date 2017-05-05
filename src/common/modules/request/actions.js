import { TOGGLE_REQUEST_DETAILS, TOGGLE_REQUEST_RECOMMENDATIONS } from './constants';

const toggleRequestDetails = (payload) => ({
  type: TOGGLE_REQUEST_DETAILS,
  payload,
});

const toggleRequestRecommendations = () => ({
  type: TOGGLE_REQUEST_RECOMMENDATIONS,
});

module.exports = {
  toggleRequestDetails,
  toggleRequestRecommendations,
};
