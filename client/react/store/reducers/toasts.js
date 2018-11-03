import { get } from 'lodash';

import { actions } from '../../../../common/constants';

const initialState = {
  hasToast: false,
  data: {
    message: '',
  },
};

const handleAction = (state, message = 'toasts.unknownIssue', type = 'negative') => ({
  ...state,
  data: {
    message,
    type,
  },
  hasToast: true,
});

const handleActionFailure = (state, action) => handleAction(state, get(action, 'error.response.data.message'));

const actionMap = {
  [actions.CLEAR_TOAST]: () => initialState,

  [actions.AUTHENTICATION_LOGIN_FAILURE]: handleActionFailure,
};

export default (state = initialState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
