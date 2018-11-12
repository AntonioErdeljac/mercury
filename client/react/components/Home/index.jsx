import React from 'react';

const Home = () => (
  <div className="mc-home mc-h-100">
    <nav className="mc-navbar fixed-top navbar-fixed navbar navbar-expand-lg navbar-light bg-transparent">
      <a className="mc-navbar-brand navbar-brand" href="#i"> <i className="fas fa-rocket" /> Mercury</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
    </nav>
    <div className="container-fluid mc-h-100">
      <div className="row mc-h-100">
        <div className="col-12 mc-h-100 text-center mc-home-heading d-flex justify-content-center align-items-center">
          Making Event Managing Great Again.<br />Join today.
        </div>
      </div>
    </div>
  </div>
);

export default Home;
