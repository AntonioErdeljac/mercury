const db = require('../../db');
const { build } = require('../../utils');

const { cookies, paths } = require('../../../common/constants');

module.exports = async (req, res, next) => {
  try {
    if (!req.cookies[cookies.AUTHENTICATION] && !req.headers.authorization) {
      return res.redirect(paths.client.LOGIN);
    }

    const user = await db.Users.getBySessionToken((req.cookies ? req.cookies[cookies.AUTHENTICATION] : undefined) || req.headers.authorization);

    if (!user) {
      res.clearCookie(cookies.AUTHENTICATION, build.cookieOptions());

      if (req.path.indexOf('/api/') === 0) {
        return res.status(401).end();
      }

      return res.redirect(paths.client.LOGIN);
    }

    req.identity = { user };

    return next();
  } catch (error) {
    return res.status(500).end();
  }
};
