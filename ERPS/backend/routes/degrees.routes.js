const router = require('express').Router();

const {
  getDegrees,
  getDegree,
  addDegree,
  deleteDegree,
  updateDegree,
} = require('../controllers/degrees.controller.js');


// get a single degree
router.get('/:id', getDegree);

// add new degree
router.post('/', addDegree);

// delete degree
router.delete('/:id', deleteDegree);

// update degree
router.patch('/:id', updateDegree);

// get all degrees
router.get('/', getDegrees);

module.exports = router;
