import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import validations from './validations';
import selectors from './selectors';

import actions from '../../../actions';

import { Form, Input, SubmitButton } from '../../common/components';

import { forms, paths } from '../../../../../common/constants';

class Register extends Form {
  constructor() {
    super();

    this.state = {
      errors: {},
      validating: {},
    };

    this.validations = validations;
    this.formId = forms.REGISTER;
  }

  componentWillMount() {
    this.purgeForm();
  }

  handleRegister = (event) => {
    this.handleSubmit(event)
      .then((canSubmit) => {
        if (canSubmit) {
          const { register, values } = this.props;

          console.log(values);

          register(values)
            .then(() => {
              window.location = paths.client.LOGIN;
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
          <div className="col-6 mc-h-100 mc-login-text" style={{ backgroundColor: 'rgba(0,0,0,.02)' }}>
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
                      <Input {...this.getFieldProps('personal.firstName')} addonIcon="user" hideLabel className="mc-login-input" name="First name" />
                    </div>
                    <div className="my-4">
                      <Input {...this.getFieldProps('personal.lastName')} addonIcon="user" hideLabel className="mc-login-input" name="Last name" />
                    </div>
                    <div className="my-4">
                      <Input {...this.getFieldProps('contact.email')} addonIcon="envelope" hideLabel className="mc-login-input" name="Email" />
                    </div>
                    <div className="my-4">
                      <Input {...this.getFieldProps('authentication.hashedPassword')} type="password" addonIcon="key" hideLabel className="mc-login-input" name="Password" />
                    </div>
                    <SubmitButton
                      label="Register"
                      className="form-control"
                      onClick={this.handleRegister}
                    />
                    <Link
                      to={paths.client.LOGIN}
                    >
                      <span className="form-control mc-register-text text-muted">Already have an account?</span>
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
)(Register);
