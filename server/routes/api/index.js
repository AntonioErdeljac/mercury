const authentication = require('./authentication');
const healthCheck = require('./healthCheck');

module.exports = (router) => {
  authentication(router);
  healthCheck(router);
};
