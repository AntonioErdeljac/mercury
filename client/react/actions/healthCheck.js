import { actions, paths } from '../../../common/constants';

import config from '../../../server/config';

export default {
  healthCheck: () => ({
    [actions.API_CALL]: {
      types: [
        actions.HEALTH_CHECK_REQUEST,
        actions.HEALTH_CHECK_SUCCESS,
        actions.HEALTH_CHECK_FAILURE,
      ],
      promise: client => client.head(`${config.serverUrl}${paths.api.v1.HEALTH_CHECK}`),
    },
  }),
};
