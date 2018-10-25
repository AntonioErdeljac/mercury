const mongoose = require('mongoose');

const config = require('../config');

mongoose.Promise = Promise;
mongoose.connect(config.mongo.uri, { useNewUrlParser: true });

module.exports = mongoose;
