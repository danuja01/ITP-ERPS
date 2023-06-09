const router = require('express').Router();
let Attendance = require('../models/attendance');

router.route('/addM').post((req, res) => {
  const employee_id = req.body.employee_id;
  const date = req.body.date;

  const newAttendance = new Attendance({
    employee_id,
    date,
  });

  newAttendance
    .save()
    .then(() => {
      res.json('Marked Attendance');
    })
    .catch((err) => {
      console.log(err);
    });
});
/*
router.route("/update/:employeID").put(async(req,res)=>{
    let userId = req.params.employeID;
    const {name, employee_id, job_type, User_name, password, job_title, age, Education, Certification} = req.body;

    const updateEmployee = {
        name, 
        employee_id, 
        job_type, 
        User_name, 
        password, 
        job_title, 
        age, 
        Education, 
        Certification
    }

    const update = await Employee.findOneAndUpdate(userId, updateEmployee).then(() => {
        res.status(200).send({status: "User Updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updation data"});
    })

    
})
*/
router.route('/delete/:id').delete(async (req, res) => {
  let userId = req.params.id;

  await Attendance.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: 'Remove Attendance' });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: 'Error with remove attendance', error: err.message });
    });
});
/*
router.route("/get/:employeID").get(async (req,res) => {
    let userId = req.params.employeID;
    const user =  await Employee.findOne({employee_id: userId}).then((Employee)=>{
        res.status(200).send({status:"User Fetched", Employee})
    }).catch((err)=>{
        res.status(500).send({status: "Error with updating data"})
    })
})*/

router.route('/getM').get((req, res) => {
  Attendance.find()
    .then((attendance) => {
      res.json(attendance);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
