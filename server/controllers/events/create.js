const db = require('../../db');
const { errors, respond } = require('../../utils');
const { errorMessages } = require('../../constants');

module.exports = async (req, res) => {
  try {
    if (!db.Events.isValid(req.body)) {
      return respond.error(res, errorMessages.EVENT_400);
    }
  } catch (error) {
    return errors.respond(error);
  }
};
