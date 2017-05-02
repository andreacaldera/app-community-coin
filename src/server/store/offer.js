import _ from 'lodash';

import offersData from '../../../data/offers.json';
import usersData from '../../../data/users.json';

const getOffers = () => {
  const offerList = _.values(offersData);
  const offersWithUsers = offerList.map((offer) => {
    const user = usersData[offer.username];
    if (!user) throw new Error(`Unable to get user for offer with username ${offer.username}`);
    return Object.assign({}, offer, { user });
  });
  return Promise.resolve(offersWithUsers);
};

export default Object.freeze({
  getOffers,
});
