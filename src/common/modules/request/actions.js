import { TOGGLE_REQUEST_DETAILS } from './constants';

const toggleRequestDetails = (payload) => ({
  type: TOGGLE_REQUEST_DETAILS,
  payload,
});

module.exports = {
  toggleRequestDetails,
};
