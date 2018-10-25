const db = require('../../db');
const { errorMessages, MIN_PASSWORD_LENGTH } = require('../../constants');
const { respond, tokens, hash } = require('../../utils');

module.exports = async (req, res) => {
  try {
    const existingUser = await db.Users.getByEmail(req.body.contact.email);

    console.log(existingUser);

    if (existingUser) {
      console.log('postoji Vlid');
      return respond.error(res, errorMessages.USER_400);
    }

    if (!db.Users.isValid(req.body)) {
      console.log('NIJE Vlid');
      return respond.error(res, errorMessages.USER_400);
    }

    if (req.body.authentication.hashedPassword.length < MIN_PASSWORD_LENGTH) {
      console.log('lozinka');
      return respond.error(res, errorMessages.USER_400);
    }

    const salt = tokens.generate();
    const user = {
      ...req.body,
      authentication: {
        salt,
        hashedPassword: hash.password(salt, req.body.authentication.hashedPassword),
      },
    };

    const createdUser = await db.Users.create(user);

    return respond.success(res, createdUser);
  } catch (error) {
    return console.log(error);
  }
};
