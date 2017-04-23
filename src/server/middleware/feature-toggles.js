import _ from 'lodash';
import qs from 'qs';

const getActiveFeatureToggles = (req) => {
  const params = qs.parse(req.query);
  const activeFeatureToggles = (params['feature-toggles'] !== undefined ?
    _.compact(params['feature-toggles']) :
    req.cookies.featureToggles);
  return activeFeatureToggles || [];
};

const featureToggles = (req, res, next) => {
  const activeFeatureToggles = getActiveFeatureToggles(req);
  res.cookie('featureToggles', activeFeatureToggles);
  res.locals.featureToggles = activeFeatureToggles;
  next();
};

export default featureToggles;
