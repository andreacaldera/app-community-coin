import data from '../../../data/offers.json';

const getOffers = () =>
  Promise.resolve(data);

export default Object.freeze({
  getOffers,
});
