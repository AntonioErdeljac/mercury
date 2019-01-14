const { authenticate } = require('../middlewares');

const { paths } = require('../../../common/constants');
const { events } = require('../../controllers');

module.exports = (router) => {
  router.get(paths.api.v1.EVENTS, authenticate, events.get);
  router.post(paths.api.v1.EVENTS, authenticate, events.create);
};
