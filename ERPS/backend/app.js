const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

const degreesRoutes = require('./routes/degrees.routes.js');
const studentsRoutes = require('./routes/students.routes.js');
const appliedStudentsRoutes = require('./routes/applied.students.routes.js');

require('dotenv').config();

// app config
const app = express();

//cors
app.use(cors());

// middleware
app.use(express.json());

/********* routes **********/

//degrees
app.use('/api/degrees', degreesRoutes);

//students
app.use('/api/students', studentsRoutes);

//applied students
app.use('/api/applied-students', appliedStudentsRoutes);

// connect to db
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('mongodb connection successful');
  })
  .catch((error) => {
    console.log(error);
  });

//port
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
