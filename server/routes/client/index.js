const authentication = require('./authentication');
const home = require('./home');

module.exports = (router) => {
  authentication(router);
  home(router);
};
