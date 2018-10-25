const _ = require('lodash');

const db = require('../../db');
const { errorMessages } = require('../../constants');
const { hash, tokens, respond, build } = require('../../utils');

const { cookies } = require('../../../common/constants');

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return respond(res, errorMessages.USER_400);
    }

    const foundUser = await db.Users.getByEmail(email)
      .select('+authentication.salt +authentication.hashedPassword');

    if (!foundUser) {
      return respond.error(res, errorMessages.USER_404, 404);
    }

    if (foundUser.authentication.hashedPassword !== hash.password(foundUser.authentication.salt, password)) {
      return respond.error(res, errorMessages.USER_400);
    }

    foundUser.authentication.sessionToken = hash.authentication(tokens.generate(), foundUser._id);

    res.cookie(cookies.AUTHENTICATION, foundUser.authentication.sessionToken, build.cookieOptions());
    res.cookie(cookies.LOCALE, foundUser.locale, build.cookieOptions());

    await foundUser.save();

    return respond.success(res, _.omit(foundUser.toObject(), ['authentication']));
  } catch (error) {
    return console.log(error);
  }
};
