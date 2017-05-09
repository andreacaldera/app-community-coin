import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import requestModule from '../modules/request';

const Request = ({ request, expanded, toggleRequestDetails }) => (
  <div className="collapsible-card">
    <a href="/requests" className="row collapsible-card__header" onClick={(e) => toggleRequestDetails(e, request.id)}>
      <div className="col-11 title">{request.title}</div>
      <div className="col"><img className="collapsible-card__thumbnail" alt={request.user.name} src={request.user.avatar} /></div>
    </a>
    <div className={`collapsible-card__details ${(expanded ? '' : 'sr-only')}`}>
      <div className="row">
        <div className="col-12 col-12 collapsible-card__details__description">
          {request.description}
        </div>
      </div>
    </div>
  </div>
);

Request.propTypes = {
  request: PropTypes.shape().isRequired,
  expanded: PropTypes.bool.isRequired,
  toggleRequestDetails: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleRequestDetails: (e, requestId) => {
    e.preventDefault();
    dispatch(requestModule.toggleRequestDetails(requestId));
  },
});

export default connect(null, mapDispatchToProps)(Request);
