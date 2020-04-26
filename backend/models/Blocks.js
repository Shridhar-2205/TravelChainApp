const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BlockSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String
  },
  phone: {
    type: String
  },
  desc: {
    type: String
  },
  aa: {
    type: String,
  },
  cc: {
    type: String
  },
  bb: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
}

});

module.exports = Block = mongoose.model('block', BlockSchema);