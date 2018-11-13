const db = require('../../db');
const { respond } = require('../../utils');
const { errorMessages } = require('../../constants');

module.exports = async (req, res) => {
  try {
    if (!db.Events.isValid(req.body)) {
      return respond.error(res, errorMessages.EVENT_400);
    }

    const createdEvent = await db.Events.create(req.body);

    return respond.success(createdEvent);
  } catch (error) {
    return respond.error(res, error);
  }
};
