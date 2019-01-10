import { actions, paths } from '../../../common/constants';

export default {
  getEvents: () => ({
    [actions.API_CALL]: {
      types: [
        actions.EVENTS_GET_REQUEST,
        actions.EVENTS_GET_SUCCESS,
        actions.EVENTS_GET_FAILURE,
      ],
      promise: client => client.get(paths.api.v1.EVENTS),
    },
  }),
};
