const models = require('./models');
const mongoose = require('./mongoose');

module.exports.mongoose = mongoose;

module.exports.Events = models.events;
module.exports.Users = models.users;
