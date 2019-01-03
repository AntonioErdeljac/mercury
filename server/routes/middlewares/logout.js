const { build } = require('../../utils');

const { cookies, paths } = require('../../../common/constants');

module.exports = (req, res) => {
  res.clearCookie(cookies.AUTHENTICATION);
  res.clearCookie(cookies.USER, build.cookieOptions());

  return res.redirect(paths.client.LOGIN);
};
