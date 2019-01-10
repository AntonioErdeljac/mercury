import { actions } from '../../../../common/constants';

const initialState = {
  data: [],
  hasFailedToLoad: false,
  isLoading: false,
};

const actionMap = {
  [actions.EVENTS_GET_REQUEST]: state => ({ ...state, isLoading: true, hasFailedToLoad: false }),
  [actions.EVENTS_GET_SUCCESS]: (state, { result }) => ({ ...state, isLoading: false, data: result.data, hasFailedToLoad: false }),
  [actions.EVENTS_GET_FAILURE]: state => ({ ...state, isLoading: false, hasFailedToLoad: true }),
};

export default (state = initialState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
