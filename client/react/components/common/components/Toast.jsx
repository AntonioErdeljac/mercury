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
    const { show, hideTimeout } = this.props;

    if (newProps.show && !show) {
      this.setState({
        showToast: true,
      });

      this.toastTimeout = setTimeout(() => {
        this.setState({
          showToast: false,
        });
      }, hideTimeout);
    }
  }

  render() {
    const { message, info, warning, icon } = this.props;
    const { showToast } = this.state;

    return (
      <div className={cn('mc-toast', { 'mc-toast--hidden': !showToast })}>
        <Message
          icon={icon}
          info={info}
          warning={warning}
          content={message}
        />
      </div>
    );
  }
}

Toast.defaultProps = {
  hideTimeout: 3000,
  info: false,
  warning: false,
  icon: undefined,
};

Toast.propTypes = {
  icon: PropTypes.string,
  show: PropTypes.bool.isRequired,
  hideTimeout: PropTypes.number,
  info: PropTypes.bool,
  warning: PropTypes.bool,
  message: PropTypes.string.isRequired,
};

export default Toast;
