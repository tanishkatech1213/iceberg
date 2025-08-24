const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNumber: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  phone: { type: String },
  branch: { type: String },
  year: { type: String },
  section: { type: String },
  gender: { type: String },
  dob: { type: Date },
  address: { type: String },
  hobbies: { type: [String] },
  skills: { type: [String] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Student', studentSchema);
