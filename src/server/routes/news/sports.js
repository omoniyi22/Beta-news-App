const express = require('express');
const router = express.Router();
// var sport = require('../../Apis/Newsapi').sport;
var sportDB = require('./../../models/News/sport')
// let sport = require('../../Apis/Newsapi').sport;


router.get('/sport', (req, res) => {
    const user = async () => {

        try {
            await sportDB.find().sort({ id: -1 })
                .then(sport => {
                    console.log(sport)
                    res.json(sport)
                })
        } catch (error) {
            res.json({ error: error })
        }
    }
    user()
})

router.get('/sport/:id', (req, res) => {
    sportDB.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json({ Error: err }))
})

router.post('/sport/comment/:id', (req, res) => {
    sportDB.findById(req.params.id)
        .then(post => {
            const { user, value } = req.body
            if (value) {
                post.comments = [{
                    "users": user,
                    "value": value,
                    "date": Date()
                }, ...post.comments]
                post.save()
                    .then(() => res.json(post))
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
//     // let Search = [...new Set(sport)]
//     Search = Search.filter(search => new RegExp(req.params.search, 'i').test(search.title))
//     let searchsport = [...new Set(sport)]
//     searchsport = searchsport.filter(search => new RegExp(req.params.search, 'i').test(search.title))
//     Search = [searchsport, Search]
//     Search = [].concat.apply([], Search)
//     res.json(Search)
// })
module.exports = router