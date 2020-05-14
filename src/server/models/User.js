const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
	first_name: {
		type: String,
		required: true,
	},
	last_name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		requires: true,
	},
	user_email: {
		type: String,
	},
	phone: {
		type: Number,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const User = mongoose.model('User', UserSchema);

module.exports = User