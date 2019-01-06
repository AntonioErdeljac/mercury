import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { _t } from '../../../../common/i18n';
import { paths, routeDetails } from '../../../../common/constants';

const Navigation = ({ children, location }) => {
  const { pageData: { user } } = window;

  const routes = Object.keys(routeDetails).map(key => (
    <Link
      key={routeDetails[key].uri}
      className={cn('mc-sidebar-item', { active: location.pathname === routeDetails[key].uri })}
      to={routeDetails[key].uri}
    >
      <i className={`fas ${routeDetails[key].icon} pr-3`} />
      <p>{_t(routeDetails[key].title)}</p>
    </Link>
  ));

  return (
    <div className="mc-h-100">
      <div className="mc-navbar">
        <div className="mc-navbar-outer">
          <i className="fas fa-search mc-navbar-search-icon pr-3" />
          <input placeholder={_t('labels.search')} className="mc-navbar-search" />
        </div>
        <div className="mc-navbar-center">
          <i className="fas fa-leaf mc-leaf-center" style={{ color: '#2d89e5', fontSize: 20 }} />
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
        {routes}
        <div onClick={() => { window.location = paths.client.LOGOUT; }} className="mc-sidebar-item bottom">
          <i className="fas fa-sign-out-alt pr-3" />
          <p>{_t('navigation.logout')}</p>
        </div>
      </div>
      <div className="mc-content">
        {children}
      </div>
    </div>
  );
};

Navigation.defaultProps = {
  location: {},
};

Navigation.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default Navigation;
