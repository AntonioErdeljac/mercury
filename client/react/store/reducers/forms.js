import { set, cloneDeep } from 'lodash';

import { actions } from '../../../../common/constants';

const initialState = {
  data: {},
};

const actionMap = {
  [actions.FORM_UPDATE_VALUES]: (state, { values, formId }) => ({
    ...set(cloneDeep(state), `data.${formId}.values`, values),
  }),

  [actions.FORM_UPDATE_FIELD_VALUE]: (state, { value, field, formId }) => ({
    ...set(cloneDeep(state), `data.${formId}.values.${field}`, value),
  }),
};

export default (state = initialState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state);
  }

  return state;
};
