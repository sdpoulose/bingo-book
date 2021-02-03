const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

//ROUTES
app.get('/', (req, res) => {
    res.send("Hello World!")
});

app.listen(3000, () => console.log("Server started on Port 3000"));