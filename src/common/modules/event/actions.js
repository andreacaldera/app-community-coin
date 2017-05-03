import { TOGGLE_EVENT_DETAILS } from './constants';

const toggleEventDetails = (payload) => ({
  type: TOGGLE_EVENT_DETAILS,
  payload,
});

module.exports = {
  toggleEventDetails,
};
