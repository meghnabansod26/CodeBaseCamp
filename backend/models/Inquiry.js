const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  course: String,
  preferredTime: String,
  question: String
}, { timestamps: true });

module.exports = mongoose.model('Inquiry', inquirySchema);
