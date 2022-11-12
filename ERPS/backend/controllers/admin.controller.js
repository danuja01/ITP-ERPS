const Admin = require('../models/admin.model');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

//login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.login(email, password);

    //create a token
    const token = createToken(admin._id);

    return res.status(200).json({ email, token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//sign up
const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.signup(email, password);

    //create a token
    const token = createToken(admin._id);

    return res.status(201).json({ email, token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { login, signup };
