import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import eventModule from '../modules/event';

const Event = ({ event, expanded, toggleEventDetails }) => (
  <div className="collapsible-card">
    <a href="/events" className="row collapsible-card__header" onClick={(e) => toggleEventDetails(e, event.id)}>
      <div className="col-11">{event.title}</div>
      <div className="col"><img className="collapsible-card__thumbnail" alt={event.user.name} src={event.user.avatar} /></div>
    </a>
    <div className={`collapsible-card__details ${(expanded ? '' : 'sr-only')}`}>
      <div className="row">
        <div className="col-12">
          {event.description}
        </div>
      </div>
    </div>
  </div>
);

Event.propTypes = {
  event: PropTypes.shape().isRequired,
  expanded: PropTypes.bool.isRequired,
  toggleEventDetails: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleEventDetails: (e, eventId) => {
    e.preventDefault();
    dispatch(eventModule.toggleEventDetails(eventId));
  },
});

export default connect(null, mapDispatchToProps)(Event);
