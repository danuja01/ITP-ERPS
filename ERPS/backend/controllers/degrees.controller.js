const Degree = require('../models/degrees.model.js');

//get all degrees

const getDegrees = async (req, res) => {
  const q = req.query.q;

  const degrees = await Degree.find().sort({ _id: -1 });

  if (!degrees) {
    return res.status(404).json({ message: 'No available degrees found' });
  } else {
    return res.status(200).json(degrees);
  }
};

//get / serach a single degree

const getDegree = async (req, res) => {
  const { id } = req.params;
  const degree = await Degree.findById({ _id: id });

  if (!degree) {
    return res.status(404).json({ message: 'No degree found' });
  } else {
    return res.status(200).json(degree);
  }
};

//add new degree

const addDegree = async (req, res) => {
  const { degree_name, z_score, duration, streams, description } = req.body;
  try {
    const degree = await Degree.create({
      degree_name,
      z_score,
      duration,
      streams,
      description,
    });

    return res.status(200).json(degree);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//delete degree
const deleteDegree = async (req, res) => {
  const { id } = req.params;

  const degree = await Degree.findOneAndDelete({ _id: id });

  if (!degree) {
    return res.status(400).json({ error: 'No such workout' });
  } else {
    return res.status(200).json(degree);
  }
};

//update degree

const updateDegree = async (req, res) => {
  const { id } = req.params;

  const degree = await Degree.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!degree) {
    return res.status(400).json({ error: 'No such degree' });
  } else {
    return res.status(200).json(degree);
  }
};

module.exports = {
  getDegrees,
  getDegree,
  addDegree,
  deleteDegree,
  updateDegree,
};
