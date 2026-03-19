const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  stripeSubscriptionId: String,
  plan: String,
  status: String,
  currentPeriodEnd: Date,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);
