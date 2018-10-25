const _ = require('lodash');
const mongoose = require('mongoose');

const schemaTypes = require('./schemaTypes');
const { languages } = require('../../../common/constants');

const { Schema } = mongoose;

const Users = mongoose.model('users', new Schema({
  authentication: {
    salt: schemaTypes.string({ select: false }),
    hashedPassword: schemaTypes.string({ select: false }),
    sessionToken: schemaTypes.string({ select: false }),
  },
  personal: {
    firstName: schemaTypes.string({ required: true }),
    lastName: schemaTypes.string({ required: true }),
  },
  contact: {
    email: schemaTypes.string({ required: true }),
  },
  locale: schemaTypes.string({ default: languages.SUPPORTED_LOCALES[0], enum: languages.SUPPORTED_LOCALES, required: true }),

  __v: schemaTypes.string({ select: false }),
  createdAt: schemaTypes.date({ select: false }),
  updatedAt: schemaTypes.date({ select: false }),
}, { timestamps: true }));

module.exports.isValid = values => !Users(values).validateSync();

module.exports.create = (values) => {
  const user = _.omit(values, ['_id']);

  return Users(user).save()
    .then(createdUser => Promise.resolve(_.omit(createdUser.toObject(), ['authentcation'])));
};

module.exports.getBySessionToken = (token) => {
  const query = { 'authentication.sessionToken': token };

  return Users.findOne(query);
};

module.exports.getByEmail = (email) => {
  const query = { 'contact.email': email };

  return Users.findOne(query);
};
