import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Input } from 'semantic-ui-react';

const InputField = ({ error, label, id, onChange, onBlur, value, disabled }) => (
  <Input
    placeholder={label}
    error={!!error}
    id={id}
    onChange={({ target }) => onChange(target.value, id)}
    onBlur={({ target }) => onBlur(target.value, id)}
    value={value}
    disabled={disabled}
    className={cn({ 'mc-error': !!error })}
  />
);

InputField.defaultProps = {
  disabled: false,
  value: '',
  error: undefined,
};

InputField.propTypes = {
  error: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default InputField;
