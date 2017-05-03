import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router';

import eventModule from '../modules/event';
import searchModule from '../modules/search';

import EventComponent from '../components/Event';

const Event = React.createFactory(EventComponent);

const Events = ({ events, recommendations, expanded, searchTerm, displayRecommendations }) => {
  const noEventElement = _.isEmpty(searchTerm) ?
    (<p>No {displayRecommendations ? 'recommended' : ''} events available yet.</p>) :
    (<p>No {displayRecommendations ? 'recommended' : ''} events found using search {searchTerm}.</p>);

  const eventsList = displayRecommendations ? recommendations : events;

  const eventElements = _.isEmpty(eventsList) ?
    noEventElement :
    (eventsList.map((_event) => Event({ key: _event.title, event: _event, expanded: expanded.includes(_event.id) })));
  return (
    <div className="events">
      <h3>
        <div className="row">
          <div className="col">Events
            {(displayRecommendations ? <Link className="view-more" to="/events">view more</Link> : null)}
          </div>
        </div>
      </h3>
      {eventElements}
    </div>
  );
};

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  recommendations: PropTypes.arrayOf(PropTypes.shape()),
  expanded: PropTypes.arrayOf(PropTypes.number).isRequired,
  searchTerm: PropTypes.string.isRequired,
  displayRecommendations: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  events: eventModule.getList(state),
  recommendations: eventModule.getRecommendations(state),
  expanded: eventModule.getExpanded(state),
  searchTerm: searchModule.getSearchTerm(state),
});

export default connect(mapStateToProps, null)(Events);
