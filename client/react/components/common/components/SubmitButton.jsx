import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'antd';

const SubmitButton = (props) => {
  const { isSubmitting, disabled, onClick, label } = props;

  return (
    <Button
      type="primary"
      disabled={disabled || isSubmitting}
      loading={isSubmitting}
      onClick={onClick}
    >
      {label}
    </Button>
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
