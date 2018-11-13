const authentication = require('./authentication');
const events = require('./events');
const healthCheck = require('./healthCheck');

module.exports = (router) => {
  authentication(router);
  events(router);
  healthCheck(router);
};
