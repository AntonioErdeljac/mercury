const { actions } = require('../../../common/constants');

export default {
  pushValues: (field, values, formId) => ({ type: actions.FORM_PUSH_VALUES, values, field, formId }),

  removeValues: (field, index, formId) => ({ type: actions.FORM_REMOVE_VALUE, field, index, formId }),

  setValues: (values, formId) => ({ type: actions.FORM_UPDATE_VALUES, values, formId }),

  updateField: (field, value, formId) => ({ type: actions.FORM_UPDATE_FIELD_VALUE, value, field, formId }),
};
