const _ = require('lodash');
const mongoose = require('mongoose');

const schemaTypes = require('./schemaTypes');

const { Schema } = mongoose;

const Events = mongoose.model('events', new Schema({
  name: schemaTypes.string({ reqiured: true }),
  description: schemaTypes.string({ required: true }),
  author: { ref: 'users', type: Schema.Types.ObjectId },
  guests: [{ ref: 'users', type: Schema.Types.ObjectId }],

  __v: schemaTypes.string({ select: false }),
  createdAt: schemaTypes.date({ select: false }),
  updatedAt: schemaTypes.date({ select: false }),
}, { timestamps: true }));

module.exports.isValid = values => !Events(values).validateSync();

module.exports.create = (values) => {
  const event = _.omit(values, ['_id']);

  return Events(event).save()
    .then(createdEvent => createdEvent);
};
