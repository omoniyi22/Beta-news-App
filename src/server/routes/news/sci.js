const express = require('express');
const router = express.Router();
// var science = require('../../Apis/Newsapi').science;
var scienceDB = require('./../../models/News/sci')
// let science = require('../../Apis/Newsapi').science;


router.get('/science', (req, res) => {
    const user = async () => {

        try {
            await scienceDB.find().sort({ id: -1 })
                .then(sci => {
                    console.log(sci)
                    res.json(sci)
                })
        } catch (error) {
            res.json({ error: error })
        }
    }
    user()
})

router.get('/science/:id', (req, res) => {
    scienceDB.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json({ Error: err }))
})

router.post('/science/comment/:id', (req, res) => {
    scienceDB.findById(req.params.id)
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


//Search Post
// router.get('/news/:search', (req, res) => {
//     // let Search = [...new Set(science)]
//     Search = Search.filter(search => new RegExp(req.params.search, 'i').test(search.title))
//     let searchscience = [...new Set(science)]
//     searchscience = searchscience.filter(search => new RegExp(req.params.search, 'i').test(search.title))
//     Search = [searchscience, Search]
//     Search = [].concat.apply([], Search)
//     res.json(Search)
// })
module.exports = router