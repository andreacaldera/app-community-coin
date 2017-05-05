import { TOGGLE_ASSET_DETAILS, TOGGLE_ASSET_RECOMMENDATIONS } from './constants';

const toggleAssetDetails = (payload) => ({
  type: TOGGLE_ASSET_DETAILS,
  payload,
});

const toggleAssetRecommendations = () => ({
  type: TOGGLE_ASSET_RECOMMENDATIONS,
});

module.exports = {
  toggleAssetDetails,
  toggleAssetRecommendations,
};
