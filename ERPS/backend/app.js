const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const degreesRoutes = require('./routes/degrees.routes.js');
const foodsRoutes = require('./routes/fooditem.routes.js');
const employeeRouter = require('./routes/employee.routes.js');
const attendanceRoute = require('./routes/attendance.routes.js');

//const courseMaterialsRoutes = require('./routes/courseMaterials.routes.js');

require('dotenv').config();

// app config
const app = express();

// middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api/degrees', degreesRoutes);
app.use('/api/fooditem', foodsRoutes);
app.use('/employee', employeeRouter);
app.use('/attendance', attendanceRoute);

//app.use('/api/courseMaterials', courseMaterialsRoutes);

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
