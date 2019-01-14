const authentication = require('./authentication');
const events = require('./events');
const base = require('./base');

module.exports = (router) => {
  authentication(router);
  events(router);
  base(router);
};
