const express = require('express');
const router = express.Router();
// var foreign = require('../../Apis/Newsapi').foreign;
var foreignDB = require('./../../models/News/foreign')
// let foreign = require('../../Apis/Newsapi').foreign;


router.get('/foreign', (req, res) => {
    const user = async () => {

        try {
            await foreignDB.find().sort({ id: -1 })
                .then(foreign => {
                    console.log(foreign)
                    res.json(foreign)
                })
        } catch (error) {
            res.json({ error: error })
        }
    }
    user()
})

router.get('/foreign/:id', (req, res) => {
    foreignDB.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json({ Error: err }))
})

router.post('/foreign/comment/:id', (req, res) => {
    foreignDB.findById(req.params.id)
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
//     // let Search = [...new Set(foreign)]
//     Search = Search.filter(search => new RegExp(req.params.search, 'i').test(search.title))
//     let searchforeign = [...new Set(foreign)]
//     searchforeign = searchforeign.filter(search => new RegExp(req.params.search, 'i').test(search.title))
//     Search = [searchforeign, Search]
//     Search = [].concat.apply([], Search)
//     res.json(Search)
// })
module.exports = router