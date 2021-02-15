const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    title: {
        type: String,
        trim: true
    },
    content: {
        type: [String]
    }
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;