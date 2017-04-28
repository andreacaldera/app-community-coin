import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import asset from '../modules/asset';
import search from '../modules/search';
import AssetComponent from '../components/Asset';

const Asset = React.createFactory(AssetComponent);

const Recommendations = ({ assets, searchTerm, expanded }) => {
  const noAssetsMessage = _.isEmpty(searchTerm) ?
    (<p>No assets available yet.</p>) :
    (<p>No assets found using search {searchTerm}.</p>);

  const assetElements = _.isEmpty(assets) ?
    noAssetsMessage :
    (assets.map((_asset) => Asset({ key: _asset.title, asset: _asset, expanded: expanded.includes(_asset.id) })));
  return (
    <div className="t-recommendations">
      <h2>Recommendations</h2>
      {assetElements}
    </div>
  );
};

Recommendations.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  expanded: PropTypes.arrayOf(PropTypes.number).isRequired,
  searchTerm: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  assets: asset.getRecommendations(state),
  expanded: asset.getExpanded(state),
  searchTerm: search.getSearchTerm(state),
});

export default connect(mapStateToProps, null)(Recommendations);
