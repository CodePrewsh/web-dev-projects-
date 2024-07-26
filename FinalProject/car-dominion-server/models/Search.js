const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  make: String,
  model: String,
  year: String,
  issues: [String] // Array of issues found
});

module.exports = mongoose.model('Search', searchSchema);
