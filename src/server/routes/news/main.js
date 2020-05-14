const express = require('express');
const router = express.Router();
var entertainment = require('./../../models/News/entertainment')
var politics = require('./../../models/News/politics')
var foreign = require('./../../models/News/foreign')
var finance = require('./../../models/News/finance')
var sport = require('./../../models/News/sport')
var science = require('./../../models/News/sci')

router.get('/main', (req, res) => {
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
                                                            res.json(p)
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

router.get('/search/:id', (req, res) => {
})


module.exports = router