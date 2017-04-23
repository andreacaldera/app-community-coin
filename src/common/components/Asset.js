import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import assetModule from '../modules/asset';

const Asset = ({ asset, expanded, toggleAssetDetails }) => (
  <div className="asset">
    <a href="/todo-asset-page" className="row asset__header" onClick={(e) => toggleAssetDetails(e, asset.id)}>
      <div className="col"><img className="asset__image" alt={asset.name} src={asset.image} /></div>
      <div className="col-10">{asset.name}</div>
      <div className="col"><img className="asset__user-avatar" alt={asset.user.name} src={asset.user.avatar} /></div>
    </a>
    <div className={`asset__details ${(expanded ? '' : 'sr-only')}`}>{asset.description}</div>
  </div>
);

Asset.propTypes = {
  asset: PropTypes.shape().isRequired,
  expanded: PropTypes.bool.isRequired,
  toggleAssetDetails: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleAssetDetails: (e, assetId) => {
    e.preventDefault();
    dispatch(assetModule.toggleAssetDetails(assetId));
  },
});


export default connect(null, mapDispatchToProps)(Asset);
