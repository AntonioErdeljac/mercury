import React from 'react';
import { notification } from 'antd';
import { connect } from 'react-redux';

import selectors from './selectors';

import actions from '../../actions';

import { POLLING_INTERVAL_MS, TOAST_TIMEOUT_MS, toastTypes } from '../../../../common/constants';

class Root extends React.Component {
  constructor() {
    super();

    this.state = {
      showConnectionSnackbar: false,
    };

    this.connectionTimeout = undefined;
  }

  componentDidMount() {
    const { healthCheck } = this.props;

    setInterval(healthCheck, POLLING_INTERVAL_MS);
  }

  componentWillReceiveProps(newProps) {
    const { isConnected } = this.props;

    if (isConnected && !newProps.isConnected) {
      clearTimeout(this.connectionTimeout);

      this.showToast();
    } else if (!isConnected && newProps.isConnected) {
      this.connectionTimeout = setTimeout(() => {
        this.setState({ showConnectionSnackbar: false });
      }, TOAST_TIMEOUT_MS);
    }
  }

  showToast = () => {
    const { isConnected } = this.props;

    notification[isConnected ? 'info' : 'warning']({
      message: isConnected ? 'Connection restored' : 'Connection lost',
      description: isConnected ? 'Connection has been restored.' : 'Connection has been lost, please wait.',
    });
  }

  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        Root
        {children}
      </React.Fragment>
    );
  }
}

export default connect(
  selectors,
  {
    ...actions.healthCheck,
  },
)(Root);
