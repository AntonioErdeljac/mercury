import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { _t } from '../../../../../common/i18n';

const SubmitButton = (props) => {
  const { isSubmitting, disabled, onClick, label, className } = props;

  return (
    <button
      type="button"
      disabled={disabled || isSubmitting}
      className={cn('mc-button primary', { [className]: className })}
      onClick={onClick}
    >
      {_t(label)}
    </button>
  );
};

SubmitButton.defaultProps = {
  className: undefined,
  disabled: false,
  isSubmitting: false,
  label: undefined,
  onClick: undefined,
};

SubmitButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isSubmitting: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default SubmitButton;
