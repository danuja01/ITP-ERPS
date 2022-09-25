const Fooditem = require('../models/fooditem.model');

//add a new food item 

const addfooditem= async (req, res) => {
    const { name,price,description } = req.body;
    try {
      const fooditem = await Fooditem.create({
        name,price,description
      });
      return res.status(200).json(fooditem);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
//get all fooditem
const getfooditem = async (req, res) => {
    const fooditem = await Fooditem.find({});
  
    if (!fooditem) {
      return res.status(404).json({ message: 'No any foodItems are avaliable' });
    } else {
      return res.status(200).json(fooditem);
    }
  };

  //update fooditem

const updatefooditem = async (req, res) => {
    const { id } = req.params;
  
    const fooditem = await Fooditem.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
  
    if (!fooditem) {
      return res.status(400).json({ error: 'Not found the item' });
    } else {
      return res.status(200).json(fooditem);
    }
  };

  //delete fooditem
const deletefooditem = async (req, res) => {
    const { id } = req.params;
  
    const fooditem = await Fooditem.findOneAndDelete({ _id: id });
  
    if (!fooditem) {
      return res.status(400).json({ error: 'Not such the item' });
    } else {
      return res.status(200).json(fooditem);
    }
  };




  module.exports = {
    addfooditem,
    getfooditem,
    updatefooditem,
    deletefooditem
  };