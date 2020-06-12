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
	id: {
		type: String
	}
});

const My_Users = mongoose.model('My_Users', UserSchema);

module.exports = My_Users