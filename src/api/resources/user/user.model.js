const mongoose = require('mongoose');

const schema = {
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
};

const userSchema = mongoose.Schema(schema);

module.exports = User = mongoose.model('user', userSchema);
