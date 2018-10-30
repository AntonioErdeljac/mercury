const actions = require('./actions');
const cookies = require('./cookies');
const forms = require('./forms');
const languages = require('./languages');
const paths = require('./paths');
const toastTypes = require('./toastTypes');

module.exports.POLLING_INTERVAL_MS = 10000;
module.exports.TOAST_TIMEOUT_MS = 3000;

module.exports.actions = actions;
module.exports.cookies = cookies;
module.exports.forms = forms;
module.exports.languages = languages;
module.exports.paths = paths;
module.exports.toastTypes = toastTypes;
