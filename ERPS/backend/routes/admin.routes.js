const express = require('express');
const router = express.Router();

const { login, signup } = require('../controllers/admin.controller');

//login
router.post('/login', login);

//sign up
router.post('/signup', signup);

module.exports = router;
