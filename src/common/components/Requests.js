import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router';

import requestModule from '../modules/request';
import searchModule from '../modules/search';

import RequestComponent from '../components/Request';

const Request = React.createFactory(RequestComponent);

const Requests = ({ requests, recommendations, expanded, searchTerm, displayRecommendations }) => {
  const noRequestElement = _.isEmpty(searchTerm) ?
    (<p>No {displayRecommendations ? 'recommended' : ''} requests available yet.</p>) :
    (<p>No {displayRecommendations ? 'recommended' : ''} requests found using search {searchTerm}.</p>);

  const requestsList = displayRecommendations ? recommendations : requests;

  const requestElements = _.isEmpty(requestsList) ?
    noRequestElement :
    (requestsList.map((_request) => Request({ key: _request.title, request: _request, expanded: expanded.includes(_request.id) })));
  return (
    <div className="requests">
      <h3>
        <div className="row">
          <div className="col">Requests
            {(displayRecommendations ? <Link className="view-more" to="/requests">view more</Link> : null)}
          </div>
        </div>
      </h3>
      {requestElements}
    </div>
  );
};

Requests.propTypes = {
  requests: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  recommendations: PropTypes.arrayOf(PropTypes.shape()),
  expanded: PropTypes.arrayOf(PropTypes.number).isRequired,
  searchTerm: PropTypes.string.isRequired,
  displayRecommendations: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  requests: requestModule.getList(state),
  recommendations: requestModule.getRecommendations(state),
  expanded: requestModule.getExpanded(state),
  searchTerm: searchModule.getSearchTerm(state),
});

export default connect(mapStateToProps, null)(Requests);
