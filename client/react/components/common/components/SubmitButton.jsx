import PropTypes from 'prop-types';
import React from 'react';

const SubmitButton = (props) => {
  const { isSubmitting, disabled, onClick, label } = props;

  return (
    <button
      type={onClick ? 'button' : 'submit'}
      disabled={disabled || isSubmitting}
      loading={isSubmitting}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

SubmitButton.defaultProps = {
  onClick: undefined,
  disabled: false,
  isSubmitting: false,
  label: undefined,
};

SubmitButton.propTypes = {
  isSubmitting: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
};

export default SubmitButton;
