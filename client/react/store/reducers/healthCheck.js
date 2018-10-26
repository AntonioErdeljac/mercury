import { actions } from '../../../../common/constants';

const initialState = {
  isConnected: true,
};

const actionMap = {
  [actions.HEALTH_CHECK_FAILURE]: state => ({ ...state, isConnected: false }),
  [actions.HEALTH_CHECK_SUCCESS]: state => ({ ...state, isConnected: true }),
};

export default (state = initialState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
