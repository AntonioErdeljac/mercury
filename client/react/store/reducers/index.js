import { combineReducers } from 'redux';

import events from './events';
import forms from './forms';
import healthCheck from './healthCheck';
import toasts from './toasts';

export default combineReducers({
  events,
  forms,
  healthCheck,
  toasts,
});
