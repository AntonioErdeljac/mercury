import { validations } from '../../../common/utils';

export default {
  'authentication.hashedPassword': value => Promise.resolve(validations.isEmpty(value) ? 'forms.errors.password.required' : ''),

  'contact.email': value => Promise.resolve(validations.isEmpty(value) ? 'forms.errors.email.required' : ''),

  'personal.firstName': value => Promise.resolve(validations.isEmpty(value) ? 'forms.errors.email.required' : ''),

  'personal.lastName': value => Promise.resolve(validations.isEmpty(value) ? 'forms.errors.email.required' : ''),
};
