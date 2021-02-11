/* const router = require('express').Router();

let Card = require('../models/card.model');

router.route('/').get((req, res) => {
    Card.find()
        .then(cards => res.json(cards))
        .catch(err => res.status(400).json('Error: ' + err));
});

*/