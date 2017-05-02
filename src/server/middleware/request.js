import store from '../store/request';

const getRequests = (req, res, next) =>
  store.getRequests().then((requests) => {
    res.locals.request = { all: requests };
    next();
  });

export default Object.freeze({
  getRequests,
});
