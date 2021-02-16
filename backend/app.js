// IMPORTS
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// CONFIG
const app = express();
const port = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.json());

// DB CONFIG 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("connection to MongoDB database has been established succesfully");
})

// ENDPOINTS
app.get('/', (req, res) => {
    res.send("Hello World!")
});

// LISTENER
app.listen(port, () => console.log(`Server started on Port ${port}`));
