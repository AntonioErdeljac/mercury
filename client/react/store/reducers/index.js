import { combineReducers } from 'redux';

import forms from './forms';
import healthCheck from './healthCheck';
import toasts from './toasts';

export default combineReducers({
  forms,
  healthCheck,
  toasts,
});
