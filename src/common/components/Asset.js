import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import assetModule from '../modules/asset';

const Asset = ({ asset, expanded, toggleAssetDetails }) => (
  <div className="collapsible-card">
    <a href="/assets" className="row collapsible-card__header" onClick={(e) => toggleAssetDetails(e, asset.id)}>
      <div className="col">
        <img className="collapsible-card__thumbnail" alt={asset.title} src={asset.thumbnail} />
      </div>
      <div className="col-10">{asset.title}</div>
      <div className="col"><img className="collapsible-card__thumbnail" alt={asset.user.name} src={asset.user.avatar} /></div>
    </a>

    <div className={`collapsible-card__details ${(expanded ? '' : 'sr-only')}`}>
      <div className="row">
        <div className="col">{asset.description}</div>
        <div className="col">
          {asset.image.map((assetImage) => <img key={assetImage} className="collapsible-card__details__image" alt={asset.title} src={assetImage} />)}
        </div>
      </div>
    </div>
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
