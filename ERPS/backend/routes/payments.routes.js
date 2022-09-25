const router = require('express').Router();

const {
    addPayment
  } = require('../controllers/payments.controller.js');

//add new degree
router.post('/', addPayment);

module.exports = router;
