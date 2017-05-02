import _ from 'lodash';

import requestsData from '../../../data/requests.json';
import usersData from '../../../data/users.json';

const getRequests = () => {
  const requestList = _.values(requestsData);
  const requestsWithUsers = requestList.map((request) => {
    const user = usersData[request.username];
    if (!user) throw new Error(`Unable to get user for request with username ${request.username}`);
    return Object.assign({}, request, { user });
  });
  return Promise.resolve(requestsWithUsers);
};

export default Object.freeze({
  getRequests,
});
