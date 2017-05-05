import { TOGGLE_EVENT_DETAILS, TOGGLE_EVENT_RECOMMENDATIONS } from './constants';

const toggleEventDetails = (payload) => ({
  type: TOGGLE_EVENT_DETAILS,
  payload,
});

const toggleEventRecommendations = () => ({
  type: TOGGLE_EVENT_RECOMMENDATIONS,
});

module.exports = {
  toggleEventDetails,
  toggleEventRecommendations,
};
