const mongoose = require('mongoose');
const SubcribeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    message: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now,
    },
});


const Subscribe = mongoose.model('Subscribe', SubscribeSchema);

module.exports = Contact