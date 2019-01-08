import React from 'react';

const Events = () => (
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

export default Events;
