import React from 'react';
import { connect } from 'react-redux';

import selectors from './selectors';

import { Form, Input, TextArea, SubmitButton } from '../../common/components';

import actions from '../../../actions';

import { _t } from '../../../../../common/i18n';
import { forms } from '../../../../../common/constants';

class EventsForm extends Form {
  constructor() {
    super();

    this.state = {
      errors: {},
      validating: {},
    };

    this.formId = forms.EVENTS;
    this.validations = {};
  }

  render() {
    return (
      <div className="mc-paper">
        <div className="container">
          <h3 style={{ textAlign: 'center' }}>{_t('events.create')}</h3>
          <hr />
          <div className="row">
            <div className="col-6">
              <Input {...this.getFieldProps('title')} hideLabel className="mc-input" name="labels.title" />
            </div>
            <div className="col-6">
              <Input {...this.getFieldProps('location')} hideLabel className="mc-input" name="labels.location" />
            </div>
            <div className="col-12">
              <TextArea {...this.getFieldProps('description')} hideLabel className="mc-input" name="labels.description" />
            </div>
            <div className="col-6">
              <Input {...this.getFieldProps('price')} hideLabel className="mc-input" name="labels.price" />
            </div>
            <div className="col-6">
              <Input {...this.getFieldProps('numberOfGuests')} hideLabel className="mc-input" name="labels.numberOfGuests" />
            </div>
          </div>
          <hr />
          <div className="col-4 offset-4">
            <SubmitButton
              label="labels.create"
              className="form-control"
            />
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
  },
)(EventsForm);
