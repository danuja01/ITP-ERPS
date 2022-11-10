const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const degreesRoutes = require('./routes/degrees.routes.js');


//const courseMaterialsRoutes = require('./routes/courseMaterials.routes.js');

require('dotenv').config();

// app config
const app = express();
app.use(cors());  //cors


// middleware
app.use(express.json());

//routes
app.use('/api/degrees', degreesRoutes);

const bookRouter = require("./routes/Book.js");
app.use("/book",bookRouter);

const bookIssue = require("./routes/BookIssue.js");
app.use("/BookIssue",bookIssue);

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
