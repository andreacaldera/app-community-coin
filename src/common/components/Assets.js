import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router';

import asset from '../modules/asset';
import search from '../modules/search';
import AssetComponent from '../components/Asset';

const Asset = React.createFactory(AssetComponent);

const Assets = ({ recommendations, assets, expanded, searchTerm, displayRecommendations }) => {
  const noAssetsMessage = _.isEmpty(searchTerm) ?
    (<p>No {displayRecommendations ? 'recommended' : ''} assets available yet.</p>) :
    (<p>No {displayRecommendations ? 'recommended' : ''} assets found using search {searchTerm}.</p>);

  const assetsList = displayRecommendations ? recommendations : assets;

  const assetElements = _.isEmpty(assetsList) ?
    noAssetsMessage :
    (assetsList.map((_asset) => Asset({ key: _asset.title, asset: _asset, expanded: expanded.includes(_asset.id) })));
  return (
    <div className="assets t-assets">
      <h3>
        <div className="row">
          <div className="col">Assets
            {(displayRecommendations ? <Link className="view-more" to="/assets">view more</Link> : null)}
          </div>
        </div>
      </h3>
      {assetElements}
    </div>
  );
};

Assets.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  recommendations: PropTypes.arrayOf(PropTypes.shape()),
  expanded: PropTypes.arrayOf(PropTypes.number).isRequired,
  searchTerm: PropTypes.string.isRequired,
  displayRecommendations: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  assets: asset.getList(state),
  recommendations: asset.getRecommendations(state),
  expanded: asset.getExpanded(state),
  searchTerm: search.getSearchTerm(state),
});

export default connect(mapStateToProps, null)(Assets);
