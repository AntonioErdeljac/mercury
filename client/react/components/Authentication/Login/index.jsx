import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import validations from './validations';
import selectors from './selectors';

import actions from '../../../actions';

import { Form, Input, SubmitButton } from '../../common/components';

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
      <div className="mc-login container-fluid mc-h-100">
        <div className="row mc-h-100">
          <div className="col-6 mc-h-100 mc-login-text">
            <div className="d-flex justify-content-left flex-column">
              <strong>Welcome to Mercury</strong>
              <p>Manage & explore events like never before.</p>
            </div>
          </div>
          <div className="col-6 mc-h-100 mc-login-form">
            <div className="container mc-h-100" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
              <div className="row" style={{ marginBottom: '150px' }}>
                <div className="col-md-6 offset-md-3 col-12">
                  <i className="fas fa-leaf d-flex justify-content-center" style={{ marginBottom: '150px', color: '#2d89e5', fontSize: 80 }} />
                  <form autoComplete="off">
                    <div className="my-4">
                      <Input {...this.getFieldProps('email')} addonIcon="envelope" hideLabel className="mc-login-input" name="Email" />
                    </div>
                    <div className="my-4">
                      <Input {...this.getFieldProps('password')} type="password" addonIcon="key" hideLabel className="mc-login-input" name="Password" />
                    </div>
                    <SubmitButton
                      label="Login"
                      className="form-control"
                      onClick={this.handleLogin}
                    />
                    <Link to={paths.client.REGISTER}>
                      <span className="form-control mc-register-text text-muted">Don&#39;t have an account?</span>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
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
