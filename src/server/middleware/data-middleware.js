import store from '../store/store';

const getAssets = (req, res, next) =>
  store.getAssets().then((assets) => {
    res.locals.asset = { all: assets };
    next();
  });

const getEvents = (req, res, next) =>
  store.getEvents().then((events) => {
    res.locals.event = { all: events };
    next();
  });

const getOffers = (req, res, next) =>
  store.getOffers().then((offers) => {
    res.locals.offer = { all: offers };
    next();
  });

const getRequests = (req, res, next) =>
  store.getRequests().then((requests) => {
    res.locals.request = { all: requests };
    next();
  });

export default Object.freeze({
  getAssets,
  getEvents,
  getOffers,
  getRequests,
});
