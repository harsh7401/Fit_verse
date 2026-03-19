const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  phone: { type: String, index: true },
  email: { type: String, index: true },
  name: String,
  avatar: String,
  stripeCustomerId: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
