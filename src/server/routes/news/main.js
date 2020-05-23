const express = require('express');
const router = express.Router();
var entertainment = require('./../../models/News/entertainment')
var politics = require('./../../models/News/politics')
var foreign = require('./../../models/News/foreign')
var finance = require('./../../models/News/finance')
var sport = require('./../../models/News/sport')
var science = require('./../../models/News/sci')
let q = []
let m
let items
function fola(p) {
    let content = 20
    items = Math.ceil(p.length / content)
    let i = 0
    let counts = 0
    let j
    let len = []
    while (i < items) {
        j = p.splice(0, content)
        len.push(j)
        i++
    }
    return (len)
}
router.get('/main/:search', (req, res) => {
    const user = async () => {
        try {
            await entertainment.find().sort({ id: -1 })
                .then(entertainment => {
                    let source = []
                    politics.find().sort({ id: -1 })
                        .then(entertainment => {
                            source = [...source, ...entertainment]
                            finance.find().sort({ id: -1 })
                                .then(entertainment => {
                                    source = [...source, ...entertainment]
                                    sport.find().sort({ id: -1 })
                                        .then(entertainment => {
                                            source = [...source, ...entertainment]
                                            foreign.find().sort({ id: -1 })
                                                .then(entertainment => {
                                                    source = [...source, ...entertainment]
                                                    science.find().sort({ id: -1 })
                                                        .then(entertainment => {
                                                            source = [...source, ...entertainment]

                                                            let p = []
                                                            var d
                                                            var b
                                                            var v

                                                            while (p.length != source.length) {
                                                                for (e in source) {
                                                                    b = Math.floor(Math.random() * (source.length))
                                                                    p.push(source[b])
                                                                    v = source[b]
                                                                    for (c in p) {
                                                                        if (c < p.length - 1) {
                                                                            if (v == p[c]) {
                                                                                console.log(v, c, ' repeat itself')
                                                                                p.pop()
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            p = p.filter(search => new RegExp(req.params.search, 'i').test(search.title))
                                                            m = p.length
                                                            q = fola(p)
                                                            if (q.length > 0) {
                                                                res.json([q, m, items])
                                                            } else {
                                                                res.json([[[]], "No result found", []])
                                                            }
                                                        })
                                                })
                                        })
                                })
                        })
                })
        } catch (error) {
            res.json({ error: error })
        }
    }
    user()
})
router.get('/main/search/:id', (req, res) => {
    function we() {
        if (req.params.id < q.length) {
            res.json([[q[req.params.id]], m, items])
        } else {
            throw 'Not in range of the searched result'
        }
    }
    try {
        we()
    } catch (err) {
        res.json([[[]], "No result found", []])
    }
})

// router.get('/search/:id', (req, res) => {
//     //Search Post
//     router.get('/news/:search', (req, res) => {
//         // let Search = [...new Set(politics)]
//         Search = Search.filter(search => new RegExp(req.params.search, 'i').test(search.title))
//         let searchEntertainment = [...new Set(entertainment)]
//         searchEntertainment = searchEntertainment.filter(search => new RegExp(req.params.search, 'i').test(search.title))
//         Search = [searchEntertainment, Search]
//         Search = [].concat.apply([], Search)
//         res.json(Search)
//     })
//     module.exports = router

// })


module.exports = router