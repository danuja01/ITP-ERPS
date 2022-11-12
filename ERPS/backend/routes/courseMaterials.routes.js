const router = require('express').Router();

const {
  getCourseMaterials,
  getCourseMaterial,
  addCourseMaterial,
  deleteCourseMaterial,
  updateCourseMaterial,
} = require('../controllers/courseMaterials.controller.js');

// get all course materials
router.get('/', getCourseMaterials);

// get a single course material
router.get('/:id', getCourseMaterial);

// add new course material
router.post('/', addCourseMaterial);

// delete course material
router.delete('/:id', deleteCourseMaterial);

// update course material
router.patch('/:id', updateCourseMaterial);

module.exports = router;
