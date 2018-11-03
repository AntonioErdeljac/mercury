import PropTypes from 'prop-types';
import React from 'react';

const InputField = ({ label, id, onChange, onBlur, value, disabled }) => (
  <input
    placeholder={label}
    id={id}
    onChange={({ target }) => onChange(target.value, id)}
    onBlur={({ target }) => onBlur(target.value, id)}
    value={value}
    disabled={disabled}
  />
);

InputField.defaultProps = {
  disabled: false,
  value: '',
};

InputField.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default InputField;
