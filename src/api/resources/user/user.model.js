const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


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

userSchema.pre('save', async function (next) {
  try {
    // generate a salt
    const salt = await bcrypt.genSalt(10);
    // generate pw hash (salt + hash) and assign for inserting in db
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (e) {
    next(e);
  }
});

module.exports = User = mongoose.model('user', userSchema);
