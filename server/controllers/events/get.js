const db = require('../../db');
const { respond } = require('../../utils');

module.exports = async (req, res) => {
  try {
    const events = await db.Events.get();

    return respond.success(events);
  } catch (error) {
    return respond.error(res, error);
  }
};
