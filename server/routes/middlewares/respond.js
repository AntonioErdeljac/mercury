const _ = require('lodash');

const packageJSON = require('../../../package.json');

const TITLE = 'Mercury';

const buildParams = (req, params = {}) => ({
  pageData: {
    user: _.get(req, 'identity.user', {}),
  },
  title: params.title || TITLE,
  version: packageJSON.version,
  isProduction: process.env.NODE_ENV === 'production',
});

module.exports = params => (req, res) => res.render('index', buildParams(req, params));
