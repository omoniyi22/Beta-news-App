const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
    first_name: {
        type: String,

    },
    last_name: {
        type: String,

    },
    email: {
        type: String,

    },
    subject: {
        type: String,

    },
    message: {
        type: String,

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
    }
});

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact