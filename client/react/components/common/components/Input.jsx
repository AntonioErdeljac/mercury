import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const InputField = ({ error, label, id, onChange, onBlur, value, disabled, name }) => (
  <div className="form-group">
    <label htmlFor={id}>
      {name}
      <input
        className={cn('form-control form-control-sm', { 'mc-error': !!error })}
        disabled={disabled}
        error={!!error}
        id={id}
        onBlur={({ target }) => onBlur(target.value, id)}
        onChange={({ target }) => onChange(target.value, id)}
        placeholder={label}
        value={value}
      />
    </label>
  </div>
);

InputField.defaultProps = {
  disabled: false,
  error: undefined,
  name: undefined,
  value: '',
};

InputField.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default InputField;
