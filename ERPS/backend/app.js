const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();

dotenv.config({path: './config.env'});

app.get('/', (req, res) => {
    res.send("Hello World");
})

const port = process.env.PORT || 3200;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})