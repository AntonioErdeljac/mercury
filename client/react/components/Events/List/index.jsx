import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import selectors from './selectors';

import actions from '../../../actions';

class EventsList extends React.Component {
  componentDidMount() {
    const { getEvents } = this.props;

    getEvents();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card mc-event-card">
              <img className="card-img-top" height="250" src="https://source.unsplash.com/random" alt="Card image cap" />
              <div className="card-body text-center">
                <h5 className="card-title">Design conference</h5>
                <p className="card-text text-muted">13 November at 5:00PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EventsList.propTypes = {
  getEvents: PropTypes.func.isRequired,
};

export default connect(
  selectors,
  {
    ...actions.events,
  },
)(EventsList);
