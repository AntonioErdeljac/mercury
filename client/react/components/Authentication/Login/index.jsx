import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Icon } from 'antd';

import selectors from './selectors';

import actions from '../../../actions';

import { Form, Input, SubmitButton } from '../../common/components';

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
    const { isSubmitting } = this.props;

    return (
      <Row className="mc-login mc-h-100">
        <Col className="mc-login-left mc-h-100" span={8}>
          <Row>
            <Col span={24}>
              <Input {...this.getFieldProps('email')} label="Email" />
            </Col>
            <Col span={24} className="mc-my-10">
              <Input {...this.getFieldProps('password')} label="Password" />
            </Col>
            <Col span={24} className="mc-my-10">
              <SubmitButton label="Login" isSubmitting={isSubmitting} />
            </Col>
          </Row>
        </Col>
        <Col className="mc-login-right mc-h-100" span={16}>
          <h1>Mercury</h1>
          <p>World's best event platform</p>
        </Col>
      </Row>
    );
  }
}

export default connect(
  selectors,
  {
    ...actions.forms,
  },
)(Login);
