const express = require('express');
const router = express.Router();
var politics = require('../../Apis/Newsapi').Politics;
var politicsDB = require('./../../models/News/politics')
let entertainment = require('../../Apis/Newsapi').Entertainment;


router.get('/politics', (req, res) => {
    const user = async () => {
        try {
            await politicsDB.find().sort({ id: -1 })
                .then(politics => {
                    console.log(politics)
                    res.json(politics)
                })
        } catch (error) {
            res.json({ error: error })
        }
    }
    user()
})

router.get('/politics/:id', (req, res) => {
    politicsDB.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json({ Error: err }))
})

router.post('/politics/comment/:id', (req, res) => {
    politicsDB.findById(req.params.id)
        .then(post => {
            const { user, value } = req.body
            if (value && user) {
                post.comments = [{
                    user,
                    value,
                    "date": Date()
                }, ...post.comments]
                post.save()
                    .then(() => res.json({
                        user,
                        value,
                        "date": Date()
                    }))
                    .catch(err => {
                        res.status(400).json(err)
                    })
            } else if (!user && value) {
                post.comments = [{
                    "user": "Anonymous",
                    value,
                    "date": Date()
                }, ...post.comments]
                post.save()
                    .then(() => res.json({
                        "user": "Anonymous",
                        value,
                        "date": Date()
                    }))
                    .catch(err => {
                        res.status(400).json(err)
                    })
            } else {
                res.json({
                    msg: 'error'
                })
            }
        })
        .catch(err => {
            res.status(400).json(err)
        })
})


module.exports = router