import store from '../store/asset';

const getAssets = (req, res, next) =>
  store.getAssets().then((assets) => {
    res.locals.asset = { all: assets };
    next();
  });

export default Object.freeze({
  getAssets,
});
