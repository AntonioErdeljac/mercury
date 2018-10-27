import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { notification } from 'antd';

import selectors from './selectors';

import actions from '../../actions';

import { POLLING_INTERVAL_MS, toastTypes } from '../../../../common/constants';

const { _t } = require('../../../../common/i18n');

class Root extends React.Component {
  componentDidMount() {
    const { healthCheck } = this.props;

    setInterval(healthCheck, POLLING_INTERVAL_MS);
  }

  componentWillReceiveProps(newProps) {
    const { isConnected } = this.props;

    if (isConnected && !newProps.isConnected) {
      this.showConnectionToast(toastTypes.WARNING);
    }

    if (!isConnected && newProps.isConnected) {
      this.showConnectionToast(toastTypes.INFO);
    }
  }

  showConnectionToast = (type) => {
    notification[type === toastTypes.INFO ? 'info' : 'warning']({
      message: type === toastTypes.INFO ? _t('toasts.connectionRestored') : _t('toasts.connectionLost'),
    });
  }

  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    );
  }
}

Root.propTypes = {
  children: PropTypes.element.isRequired,
  healthCheck: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired,
};

export default connect(
  selectors,
  {
    ...actions.healthCheck,
  },
)(Root);
