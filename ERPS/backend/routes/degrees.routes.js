const router = require('express').Router();
const { requireAuth } = require('../middleware/requireAuth');

const {
  getDegrees,
  getDegree,
  addDegree,
  deleteDegree,
  updateDegree,
} = require('../controllers/degrees.controller.js');

//auth middleware
// router.use(requireAuth);

// get all degrees
router.get('/', getDegrees);

// get a single degree
router.get('/:id', getDegree);

// add new degree
router.post('/', addDegree);

// delete degree
router.delete('/:id', deleteDegree);

// update degree
router.patch('/:id', updateDegree);

module.exports = router;
