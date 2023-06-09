const mongoose = require('mongoose');

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const studentsSchema = new mongoose.Schema({
  nic: {
    type: Number,
    required: true,
  },
  student_name: {
    type: String,
    required: true,
  },
  index_number: {
    type: Number,
    required: true,
  },
  z_score: {
    type: Number,
    required: true,
  },
  subject_stream: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
});

module.exports = mongoose.model('Student', studentsSchema);
