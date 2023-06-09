const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//static method to signup a new admin
adminSchema.statics.signup = async function (email, password) {
  //check if email is valid
  if (!email || !password) {
    throw new Error('All fields are required');
  }

  if (!validator.isEmail(email)) {
    throw new Error('Invalid email');
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error(
      'Password must be at least 8 characters long and contain at least one uppercase, lowercase, numeric and special character'
    );
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error('User already exists');
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const admin = await this.create({
    email,
    password: hash,
  });

  return admin;
};

//static method to login an admin
adminSchema.statics.login = async function (email, password) {
  //check if email is valid
  if (!email || !password) {
    throw new Error('All fields are required');
  }

  if (!validator.isEmail(email)) {
    throw new Error('Invalid email');
  }

  const admin = await this.findOne({ email });

  if (!admin) {
    throw new Error('Incorrect email or password');
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    throw new Error('Incorrect email or password');
  }

  return admin;
};

module.exports = mongoose.model('Admin', adminSchema);
