import PropTypes from 'prop-types';
import cn from 'classnames';
import React from 'react';
import { Message } from 'semantic-ui-react';

class Toast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showToast: props.show,
    };

    this.toastTimeout = undefined;
  }

  componentDidMount() {
    const { show, hideTimeout } = this.props;

    if (show) {
      this.toastTimeout = setTimeout(() => {
        this.setState({ showToast: false });
      }, hideTimeout);
    }
  }

  componentWillReceiveProps(newProps) {
    const { show, hideTimeout, onTimeout } = this.props;

    if (newProps.show && !show) {
      this.setState({
        showToast: true,
      });

      this.toastTimeout = setTimeout(() => {
        this.setState({
          showToast: false,
        }, () => {
          onTimeout();
        });
      }, hideTimeout);
    }
  }

  render() {
    const { message, info, negative, icon, warning } = this.props;
    const { showToast } = this.state;

    return (
      <div className={cn('mc-toast', { 'mc-toast--hidden': !showToast })}>
        <Message
          icon={icon}
          info={info}
          warning={warning}
          negative={negative}
          content={message}
        />
      </div>
    );
  }
}

Toast.defaultProps = {
  hideTimeout: 3000,
  icon: undefined,
  info: false,
  negative: false,
  onTimeout: () => {},
  warning: false,
};

Toast.propTypes = {
  hideTimeout: PropTypes.number,
  icon: PropTypes.string,
  info: PropTypes.bool,
  message: PropTypes.string.isRequired,
  negative: PropTypes.bool,
  onTimeout: PropTypes.func,
  show: PropTypes.bool.isRequired,
  warning: PropTypes.bool,
};

export default Toast;
