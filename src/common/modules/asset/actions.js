import { TOGGLE_ASSET_DETAILS } from './constants';

const toggleAssetDetails = (payload) => ({
  type: TOGGLE_ASSET_DETAILS,
  payload,
});

module.exports = {
  toggleAssetDetails,
};
