import React from 'react';
import { connect } from 'react-redux';

import selectors from './selectors';

import actions from '../../../actions';

import { Form, Input } from '../../common/components';

import { forms } from '../../../../../common/constants';

class Login extends Form {
  constructor() {
    super();

    this.state = {
      errors: {},
      validating: {},
    };

    this.validations = {};
    this.formId = forms.LOGIN;
  }

  render() {
    return (
      <React.Fragment>
        <Input {...this.getFieldProps('contact.email')} label="Email" />
        <Input {...this.getFieldProps('authentication.hashedPassword')} label="Password" />
      </React.Fragment>
    );
  }
}

export default connect(
  selectors,
  {
    ...actions.forms,
  },
)(Login);
