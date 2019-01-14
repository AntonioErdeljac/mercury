import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { _t } from '../../../../../common/i18n';

class TextArea extends React.Component {
  constructor() {
    super();

    this.state = {
      isAddonFocused: false,
    };
  }

  toggleFocusAddon = () => {
    const { addonIcon } = this.props;
    const { isAddonFocused } = this.state;

    if (addonIcon) {
      this.setState({
        isAddonFocused: !isAddonFocused,
      });
    }
  }

  handleOnBlur = (value, id) => {
    const { onBlur } = this.props;

    onBlur(value, id);
    this.toggleFocusAddon();
  }

  render() {
    const { error, id, onChange, value, disabled, name, className, addonIcon, type } = this.props;
    const { isAddonFocused } = this.state;

    const addon = addonIcon
      ? (
        <div className="mc-input-addon input-group-prepend">
          <span className={cn('input-group-text mc-input-addon-text', { focused: isAddonFocused, error: !!error })}>
            <i className={cn('fas', { [`fa-${addonIcon}`]: addonIcon })} />
          </span>
        </div>
      )
      : null;

    return (
      <div className="mc-input input-group my-3">
        {addon}
        <textarea
          rows={4}
          type={type}
          className={cn(`${className} form-control`, { 'mc-error': !!error })}
          disabled={disabled}
          error={error}
          id={id}
          onFocus={() => this.toggleFocusAddon()}
          onBlur={({ target }) => this.handleOnBlur(target.value, id)}
          onChange={({ target }) => onChange(target.value, id)}
          placeholder={_t(name)}
          value={value}
        />
      </div>
    );
  }
}

TextArea.defaultProps = {
  addonIcon: undefined,
  className: '',
  disabled: false,
  error: undefined,
  name: undefined,
  type: 'text',
  value: '',
};

TextArea.propTypes = {
  addonIcon: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default TextArea;
