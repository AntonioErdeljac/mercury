import React from 'react';
import { connect } from 'react-redux';

import validations from './validations';
import selectors from './selectors';

import actions from '../../../actions';

import { Form, Input } from '../../common/components';

import { forms, paths } from '../../../../../common/constants';

class Login extends Form {
  constructor() {
    super();

    this.state = {
      errors: {},
      validating: {},
    };

    this.validations = validations;
    this.formId = forms.LOGIN;
  }

  componentWillMount() {
    this.purgeForm();
  }

  handleLogin = (event) => {
    this.handleSubmit(event)
      .then((canSubmit) => {
        if (canSubmit) {
          const { login, values } = this.props;

          login(values)
            .then(() => {
              window.location = paths.client.HOME;
            });
        }

        return canSubmit;
      });
  }

  componentWillUnmount() {
    this.purgeForm();
  }

  purgeForm = () => {
    const { setValues } = this.props;

    this.setState({ errors: {}, validating: {} });

    setValues({}, this.formId);
  }

  render() {
    return (
      <div className="container-fluid mc-h-100">
        <div className="row mc-h-100">
          <div className="col-6 mc-h-100 mc-bg-primary" />
          <div className="col-6">
            <form>
              <Input {...this.getFieldProps('email')} name="Email" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  selectors,
  {
    ...actions.forms,
    ...actions.authentication,
  },
)(Login);
