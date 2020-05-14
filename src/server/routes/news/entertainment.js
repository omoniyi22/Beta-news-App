const express = require('express');
const router = express.Router();
// var entertainment = require('../../Apis/Newsapi').entertainment;
var entertainmentDB = require('./../../models/News/entertainment')
// let entertainment = require('../../Apis/Newsapi').Entertainment;


router.get('/entertainment', (req, res) => {
    const user = async () => {

        try {
            await entertainmentDB.find().sort({ id: -1 })
                .then(entertainment => {
                    console.log(entertainment)
                    res.json(entertainment)
                })
        } catch (error) {
            res.json({ error: error })
        }
    }
    user()
})

router.get('/entertainment/:id', (req, res) => {
    entertainmentDB.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json({ Error: err }))
})

router.post('/entertainment/comment/:id', (req, res) => {
    entertainmentDB.findById(req.params.id)
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
//     // let Search = [...new Set(entertainment)]
//     Search = Search.filter(search => new RegExp(req.params.search, 'i').test(search.title))
//     let searchEntertainment = [...new Set(entertainment)]
//     searchEntertainment = searchEntertainment.filter(search => new RegExp(req.params.search, 'i').test(search.title))
//     Search = [searchEntertainment, Search]
//     Search = [].concat.apply([], Search)
//     res.json(Search)
// })
module.exports = router