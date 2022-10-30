const mongoose = require('mongoose');

// Student Schema
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  user: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

const studentModel = mongoose.model('Student', studentSchema);

module.exports = studentModel;
