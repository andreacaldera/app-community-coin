import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import assetModule from '../modules/asset';

const Asset = ({ asset, expanded, toggleAssetDetails }) => (
  <div className="asset">
    <a href="/assets" className="row asset__header" onClick={(e) => toggleAssetDetails(e, asset.id)}>
      <div className="asset__thumbnail col">
        <center>
          <img className="asset__header__image" alt={asset.title} src={asset.image[0]} />
        </center>
      </div>
      <div className="col-9">{asset.title}</div>
      <div className="col asset__thumbnail"><img className="asset__user-avatar" alt={asset.user.name} src={asset.user.avatar} /></div>
    </a>

    <div className={`asset__details ${(expanded ? '' : 'sr-only')}`}>
      <div className="row">
        <div className="col">{asset.description}</div>
        <div className="col">
          ({asset.image.map((assetImage) => (<img key={assetImage} className="asset__details__image" alt={asset.title} src={assetImage} />))})
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
