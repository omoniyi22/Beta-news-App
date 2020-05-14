const express = require('express');
const router = express.Router();
// var finance = require('../../Apis/Newsapi').finance;
var financeDB = require('./../../models/News/finance')
// let finance = require('../../Apis/Newsapi').finance;


router.get('/finance', (req, res) => {
    const user = async () => {

        try {
            await financeDB.find().sort({ id: -1 })
                .then(finance => {
                    console.log(finance)
                    res.json(finance)
                })
        } catch (error) {
            res.json({ error: error })
        }
    }
    user()
})

router.get('/finance/:id', (req, res) => {
    financeDB.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json({ Error: err }))
})

router.post('/finance/comment/:id', (req, res) => {
    financeDB.findById(req.params.id)
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
//     // let Search = [...new Set(finance)]
//     Search = Search.filter(search => new RegExp(req.params.search, 'i').test(search.title))
//     let searchfinance = [...new Set(finance)]
//     searchfinance = searchfinance.filter(search => new RegExp(req.params.search, 'i').test(search.title))
//     Search = [searchfinance, Search]
//     Search = [].concat.apply([], Search)
//     res.json(Search)
// })
module.exports = router