const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  weight: Number,
  bodyFat: Number,
  workouts: Number,
  notes: String,
});

module.exports = mongoose.model('Progress', ProgressSchema);
