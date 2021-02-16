// IMPORTS
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

import Card from './models/card.model';

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

app.post('/cards', (req, res) => {
    const dbCard = req.body;
    Card.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
});

app.get('/cards', (req, res) => {
    Card.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

// LISTENER
app.listen(port, () => console.log(`Server started on Port ${port}`));
