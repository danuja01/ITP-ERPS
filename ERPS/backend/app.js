const express = require('express');
const mongoose = require('mongoose');
const degreesRoutes = require('./routes/degrees.routes.js');
const foodsRoutes = require('./routes/fooditem.routes.js');
const CartsRoutes = require('./routes/Cart.routes.js');
const cors =require('cors');





require('dotenv').config();

// app config
const app = express();

// middleware
app.use(express.json());
app.use(cors());

//routes
app.use('/api/degrees', degreesRoutes);
app.use('/api/fooditem', foodsRoutes);
app.use('/api/cart', CartsRoutes);

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
