const mongoose = require('mongoose');
const { db } = require('./config');


mongoose.Promise = global.Promise;

const connect = async () => {
  const conn = await mongoose.connect(db.url, { useNewUrlParser: true });
  if (conn) {
    console.log(`db connected on port #${conn.connections[0].port}`);
  }
};

module.exports = connect;
