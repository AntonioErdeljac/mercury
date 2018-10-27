const { get } = require('lodash');

const { languages } = require('./constants');

const activeLocale = languages.SUPPORTED_LOCALES[0];

module.exports._t = value => get(languages[activeLocale], value) || value;
