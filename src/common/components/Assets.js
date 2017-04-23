import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import asset from '../modules/asset';
import AssetComponent from '../components/Asset';

const Asset = React.createFactory(AssetComponent);

const Assets = ({ assets, expanded }) => {
  const assetElements = _.isEmpty(assets) ?
    (<p>No assets available yet.</p>) :
    (assets.map((_asset) => Asset({ asset: _asset, expanded: expanded.includes(_asset.id) })));
  return (
    <div>
      <h2>Assets</h2>
      {assetElements}
    </div>
  );
};

Assets.propTypes = {
  assets: PropTypes.arrayOf.isRequired,
  expanded: PropTypes.arrayOf(PropTypes.number).isRequired,
};

const mapStateToProps = (state) => ({
  assets: asset.getList(state),
  expanded: asset.getExpanded(state),
});

export default connect(mapStateToProps, null)(Assets);
