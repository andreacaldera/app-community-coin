import store from '../store/offer';

const getOffers = (req, res, next) =>
  store.getOffers().then((offers) => {
    res.locals.offer = { all: offers };
    next();
  });

export default Object.freeze({
  getOffers,
});
