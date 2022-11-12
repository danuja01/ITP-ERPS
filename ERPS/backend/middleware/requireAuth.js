const jwt = require('jsonwebtoken');
const Admin = require('../models/admin.model');

const requireAuth = async (req, res, next) => {
  // verify auth token
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = authorization.split(' ')[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await Admin.findOne({ _id }).select('_id');
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = { requireAuth };
