const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    read: {
        type: Boolean
    },
    date: {
        type: Date,
        default: Date.now,
    },
    dot: {
        type: String,
        required: true
    }
});

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact