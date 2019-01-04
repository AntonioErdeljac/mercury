import PropTypes from 'prop-types';
import React from 'react';

import { paths } from '../../../../common/constants';

const Navigation = ({ children }) => {
  const { pageData: { user } } = window;

  return (
    <div className="mc-h-100">
      <div className="mc-navbar">
        <div>
          <i className="fas fa-search pr-3" />
          <input placeholder="Search" className="mc-navbar-search" />
        </div>
        <div className="mc-navbar-center">
          <i className="fas fa-leaf" style={{ color: '#2d89e5', fontSize: 20 }} />
        </div>
        <div className="mc-navbar-right">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/305956/profile/profile-512.jpg?6"
            className="mc-navbar-user-img"
          />
          <p>{user.personal.firstName}</p>
          &nbsp;
          <p>{user.personal.lastName}</p>
        </div>
      </div>
      <div className="mc-sidebar">
        <div className="mc-sidebar-item">
          <i className="fas fa-chart-pie pr-3" />
          <p>Overview</p>
        </div>
        <div className="mc-sidebar-item">
          <i className="fas fa-calendar pr-3" />
          <p>Calendar</p>
        </div>
        <div className="mc-sidebar-item">
          <i className="fas fa-comment pr-3" />
          <p>Chat</p>
        </div>
        <div className="mc-sidebar-item">
          <i className="far fa-calendar-check pr-3" />
          <p>Events</p>
        </div>
        <div className="mc-sidebar-item">
          <i className="fas fa-box-open pr-3" />
          <p>Products</p>
        </div>
        <div className="mc-sidebar-item">
          <i className="fas fa-cogs pr-3" />
          <p>Settings</p>
        </div>
        <div onClick={() => { window.location = paths.client.LOGOUT; }} className="mc-sidebar-item bottom">
          <i className="fas fa-sign-out-alt pr-3" />
          <p>Logout</p>
        </div>
      </div>
      <div className="mc-content">
        {children}
      </div>
    </div>
  );
};

Navigation.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Navigation;
