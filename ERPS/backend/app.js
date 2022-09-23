const express = require('express');
const mongoose = require('mongoose');

const degreesRoutes = require('./routes/degrees.routes.js');
const courseMaterialsRoutes = require('./routes/courseMaterials.routes.js');

require('dotenv').config();

// app config
const app = express();

// middleware
app.use(express.json());

//routes
app.use('/api/degrees', degreesRoutes);
app.use('/api/courseMaterials', courseMaterialsRoutes);

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
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
