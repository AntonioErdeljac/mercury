import { combineReducers } from 'redux';

import forms from './forms';
import healthCheck from './healthCheck';

export default combineReducers({
  forms,
  healthCheck,
});
