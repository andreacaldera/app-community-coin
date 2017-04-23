import data from '../../../data/assets.json';

const getAssets = () =>
  Promise.resolve(data);

export default Object.freeze({
  getAssets,
});
