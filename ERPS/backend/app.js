const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//const courseMaterialsRoutes = require('./routes/courseMaterials.routes.js');
var cors = require('cors');

const degreesRoutes = require('./routes/degrees.routes.js');
const paymentsRoutes = require('./routes/payments.routes.js');
const cmaterialsRoutes = require('./routes/courseMaterials.routes.js');
const studentsRoutes = require('./routes/students.routes.js');
const appliedStudentsRoutes = require('./routes/applied.students.routes.js');
const selectedStudents = require('./routes/slected.students.routes.js');
const adminRoutes = require('./routes/admin.routes.js');
const foodsRoutes = require('./routes/fooditem.routes.js');
const itemRouter = require('./routes/items.routes.js');
const CartsRoutes = require('./routes/Cart.routes.js');

//const courseMaterialsRoutes = require('./routes/courseMaterials.routes.js');

require('dotenv').config();

// app config
const app = express();
app.use(cors()); //cors

//cors
app.use(cors());

// middleware
app.use(express.json());
app.use(cors());

/********* routes **********/

//admin
app.use('/api/admin', adminRoutes);

//degrees
app.use('/api/degrees', degreesRoutes);
app.use('/api/fooditem', foodsRoutes);

//inventory
app.use('/item', itemRouter);

//app.use('/api/courseMaterials', courseMaterialsRoutes);
app.use('/api/cart', CartsRoutes);

//books
const bookRouter = require('./routes/Book.js');
app.use('/book', bookRouter);

const bookIssue = require('./routes/BookIssue.js');
app.use('/BookIssue', bookIssue);

//food
app.use('/api/fooditem', foodsRoutes);

//payments
app.use('/api/payments', paymentsRoutes);

//c-materials
app.use('/api/cmaterials', cmaterialsRoutes);

//students
app.use('/api/students', studentsRoutes);

//applied students
app.use('/api/applied-students', appliedStudentsRoutes);

//selected students
app.use('/api/selected-students', selectedStudents);

/********** connect to db **********/
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
