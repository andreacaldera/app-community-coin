import _ from 'lodash';

import assetsData from '../../../data/assets.json';
import usersData from '../../../data/users.json';

const getAssets = () => {
  const assetList = _.values(assetsData);
  const assetsWithUsers = assetList.map((asset) => {
    const user = usersData[asset.username];
    if (!user) throw new Error(`Unable to get user for asset with username ${asset.username}`);
    return Object.assign({}, asset, { user });
  });
  return Promise.resolve(assetsWithUsers);
};

export default Object.freeze({
  getAssets,
});
