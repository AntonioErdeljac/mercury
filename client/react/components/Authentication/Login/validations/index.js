import { validations } from '../../../common/utils';

export default {
  password: value => Promise.resolve(validations.isEmpty(value) ? 'forms.errors.password.required' : ''),

  email: value => Promise.resolve(validations.isEmpty(value) ? 'forms.errors.email.required' : ''),
};
