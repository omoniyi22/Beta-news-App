const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('./../../models/User');

router.get('/register', (req, res) => res.send('Register'));

router.post('/register', (req, res) => {
	const { first_name, last_name, email, password, password2, user_email, phone } = req.body;
	let error = [];
	let gudRes = [];

	// Check required field
	if (!first_name || !last_name || !email || !password || !password2) {
		error.push({ msg: 'Please fill in all fields' });
	}

	// Check passwords match
	if (password !== password2) {
		error.push({ msg: 'Password do not match' });
	}

	// Check password length
	if (password.length < 6) {
		error.push({ msg: 'Password should be at least 6 characters' });
	}

	if (error.length > 0) {
		res.json(error);
	} else {
		// Validation passed
		User.findOne({ email: email }).then((user) => {

			if (user) {
				error.push({ msg: 'Email already registered' });
				res.json(error);
			} else {
				const newUser = new User({
					first_name,
					last_name,
					email,
					password,
					user_email,
					phone
				});

				//Hash password
				bcrypt.genSalt(10, (err, salt) =>
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err;

						// hash password
						newUser.password = hash;
						// save user
						newUser.save().then((user) => {
							res.json({ mg: user.first_name + ',' + " " + 'You have registered succesfully' })
						}).catch((err) => console.log(err));
					}),
				);
			}
		});
	}
});

module.exports = router;