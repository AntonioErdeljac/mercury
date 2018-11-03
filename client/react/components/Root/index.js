import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import selectors from './selectors';

import { Toast } from '../common/components';

import actions from '../../actions';

import { POLLING_INTERVAL_MS, TOAST_TIMEOUT_MS } from '../../../../common/constants';

const { _t } = require('../../../../common/i18n');

class Root extends React.Component {
  componentDidMount() {
    const { healthCheck } = this.props;

    setInterval(healthCheck, POLLING_INTERVAL_MS);
  }

  render() {
    const { children, isConnected } = this.props;

    return (
      <React.Fragment>
        <Toast
          icon="globe"
          show={isConnected}
          hideTimeout={TOAST_TIMEOUT_MS}
          message={_t('toasts.connectionRestored')}
          info
        />
        <Toast
          icon="globe"
          show={!isConnected}
          hideTimeout={TOAST_TIMEOUT_MS}
          message={_t('toasts.connectionLost')}
          warning
        />
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
