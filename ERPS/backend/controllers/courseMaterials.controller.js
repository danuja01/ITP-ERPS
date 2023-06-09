const CourseMaterials = require('../models/courseMaterials.model.js');

//get all cm

const getCourseMaterials = async (req, res) => {
  const courseMaterials = await CourseMaterials.find({});

  if (!courseMaterials) {
    return res
      .status(404)
      .json({ message: 'No available course materials found' });
  } else {
    return res.status(200).json(courseMaterials);
  }
};

//get a single cm

const getCourseMaterial = async (req, res) => {
  const { id } = req.params;

  const courseMaterial = await CourseMaterials.findById({ _id: id });

  if (!courseMaterial) {
    return res.status(404).json({ message: 'No course material found' });
  } else {
    return res.status(200).json(courseMaterial);
  }
};

//add new cm

const addCourseMaterial = async (req, res) => {
  const { module_name, url, duration, lecturer, notice } = req.body;

  try {
    const courseMaterial = await CourseMaterials.create({
      module_name,
      url,
      duration,
      lecturer,
      notice,
    });

    return res.status(200).json(courseMaterial);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//delete cm

const deleteCourseMaterial = async (req, res) => {
  const { id } = req.params;

  const courseMaterial = await CourseMaterials.findOneAndDelete({ _id: id });

  if (!courseMaterial) {
    return res.status(400).json({ error: 'No such course material' });
  } else {
    return res.status(200).json(courseMaterial);
  }
};

//update cm

const updateCourseMaterial = async (req, res) => {
  const { id } = req.params;

  const courseMaterial = await CourseMaterials.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!courseMaterial) {
    return res.status(400).json({ error: 'No such course material' });
  } else {
    return res.status(200).json(courseMaterial);
  }
};

module.exports = {
  getCourseMaterials,
  getCourseMaterial,
  addCourseMaterial,
  deleteCourseMaterial,
  updateCourseMaterial,
};
