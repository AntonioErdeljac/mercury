import React from 'react';
import { connect } from 'react-redux';
import { Button, Form as SemForm, Checkbox } from 'semantic-ui-react';

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
              window.location = paths.client.BASE;
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
    const { isSubmitting } = this.props;

    return (
      <div className="mc-login mc-h-100">
        <div className="mc-login-left mc-h-100" span={8}>
          <SemForm autocomplete="off" onSubmit={this.handleLogin}>
            <SemForm.Field>
              <Input {...this.getFieldProps('email')} label="Email" />
            </SemForm.Field>
            <SemForm.Field>
              <Input {...this.getFieldProps('password')} label="Password" />
            </SemForm.Field>
            <SemForm.Field>
              <Checkbox label="Remember me" />
            </SemForm.Field>
            <Button type="submit">Submit</Button>
          </SemForm>
        </div>
        <div className="mc-login-right mc-h-100" span={16}>
          <h1>Mercury</h1>
          <p>World's best event platform</p>
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
