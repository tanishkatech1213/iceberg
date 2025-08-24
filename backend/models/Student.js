const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  year: String,
  major: String,
  skills: String,
  interests: String,
  personality: String,
  funFact: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Student', studentSchema);
