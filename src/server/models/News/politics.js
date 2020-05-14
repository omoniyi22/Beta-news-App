const mongoose = require('mongoose');
const PoliticsSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    comments: {
        type: Object,
        users: {
            type: String
        },
        value: {
            type: String
        },
        date: {
            type: Date,
            default: Date()
        }
    },
    views: {
        type: Number
    },
    date: {
        type: String,
    },
    id: {
        type: Number

    }
});

const Politics = mongoose.model('Politics', PoliticsSchema);
module.exports = Politics