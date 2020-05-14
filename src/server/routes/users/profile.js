const express = require('express');
const User = require('./../../models/User')
const router = express.Router();
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const cors = require('cors')

process.env.SECRET_KEY = 'secrete'



router.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.header['authorization'], process.env.SECRET_KEY)
    User.findOne({
        _id: decoded._id
    })
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                res.send('User does not exit')
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

module.exports = router