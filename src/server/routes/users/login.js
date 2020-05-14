const express = require('express');
const User = require('./../../models/User')
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const cors = require('cors')

router.use(cors());
process.env.SECRET_KEY = 'secret'

router.post('/login', (req, res) => {
    const { email, password } = req.body
    if (email || password) {
        User.findOne({ email: email })
            .then(user => {
                if (user) {
                    if (bcrypt.compareSync(password, user.password)) {
                        const payload = {
                            _id: user._id,
                            first_name: user.first_name,
                            last_name: user.last_name,
                            email: user.email,
                            password: user.password
                        }
                        let token = jwt.sign(payload, process.env.SECRET_KEY, {
                            expiresIn: 129440
                        })
                        res.send(token)
                    } else {
                        res.json({ error: "Password is incorrect" })
                    }
                } else {
                    res.json({ error: "User does not exist" })
                }
            })
            .catch(err => {
                res.json({ error: err })
            })
    } else {
        return res.json({ error: "Username or Password is Empty" })
    }
});
module.exports = router;