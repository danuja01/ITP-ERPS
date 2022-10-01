const mongoose = require('mongoose');

const cmSchema = new mongoose.Schema({
  module_name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  Duration: {
    type: Number,
    required: true,
  },
  Lecturer: {
    type: String,
    required: true,
  },
  Notice: {
    type: String,
  },
});

module.exports = mongoose.model('CourseMaterial', cmSchema);
