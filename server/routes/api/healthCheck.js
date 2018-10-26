const { paths } = require('../../../common/constants');

module.exports = (router) => {
  router.head(paths.api.v1.HEALTH_CHECK, (req, res) => res.status(200).end());
};
