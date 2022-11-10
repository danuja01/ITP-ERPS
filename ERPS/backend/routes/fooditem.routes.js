const router = require('express').Router();

const {
    addfooditem,
    getfooditem,
    updatefooditem,
    deletefooditem
  } = require('../controllers/fooditem.controller');
  
// add new item
router.post('/', addfooditem);
//get all items
router.get('/' ,getfooditem);
//update all items
router.put('/:id' , updatefooditem);
//delete
router.delete('/:id' ,deletefooditem);







module.exports = router;
