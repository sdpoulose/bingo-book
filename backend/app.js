const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

mongoose.connection.once('open', () => {
    console.log("connection to MongoDB database has been established succesfully");
})

//ROUTES
app.get('/', (req, res) => {
    res.send("Hello World!")
});

const cardsRouter = require('./routes/cards');

app.use('./cards', cardsRouter);

app.listen(3000, () => console.log("Server started on Port 3000"));