const { authenticate, respond } = require('../middlewares');

const { paths } = require('../../../common/constants');

module.exports = (router) => {
  router.get(paths.client.BASE, authenticate, respond());
};
