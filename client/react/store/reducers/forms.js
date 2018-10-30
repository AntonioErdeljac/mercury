import { set, cloneDeep, get, filter } from 'lodash';

import { actions } from '../../../../common/constants';

const initialState = {
  data: {},
};

const actionMap = {
  [actions.FORM_UPDATE_VALUES]: (state, { values, formId }) => ({
    ...set(cloneDeep(state), `data.${formId}.values`, values),
  }),

  [actions.FORM_UPDATE_FIELD_VALUE]: (state, { value, formId, field }) => ({
    ...set(cloneDeep(state), `data.${formId}.values.${field}`, value),
  }),

  [actions.FORM_PUSH_VALUES]: (state, { values, field, formId }) => ({
    ...set(cloneDeep(state), `data.${formId}.values.${field}`, get(state, `data.${formId}.values.${field}`, []).concat(cloneDeep(values))),
  }),

  [actions.FORM_REMOVE_VALUE]: (state, { field, index, formId }) => ({
    ...set(cloneDeep(state), `data.${formId}.values.${field}`, filter(get(state, `data.${formId}.values.${field}`, []), (_x, key) => key !== index)),
  }),
};

export default (state = initialState, action) => {
  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
