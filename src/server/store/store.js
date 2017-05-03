import _ from 'lodash';

import assetsData from '../../../data/assets.json';
import eventsData from '../../../data/events.json';
import offersData from '../../../data/offers.json';
import requestsData from '../../../data/requests.json';
import usersData from '../../../data/users.json';

const decorate = (entity) => {
  const user = usersData[entity.username];
  if (!user) throw new Error(`Unable to load user using username ${entity.username}`);
  return Object.assign({}, entity, { user });
};

const getAssets = () => Promise.resolve(_.values(assetsData).map(decorate));
const getEvents = () => Promise.resolve(_.values(eventsData).map(decorate));
const getOffers = () => Promise.resolve(_.values(offersData).map(decorate));
const getRequests = () => Promise.resolve(_.values(requestsData).map(decorate));

export default Object.freeze({
  getAssets,
  getEvents,
  getOffers,
  getRequests,
});
