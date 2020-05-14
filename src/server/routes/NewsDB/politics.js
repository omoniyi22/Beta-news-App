const politicsDB = require('../../models/News/politics')
const express = require('express');
const router = express.Router();


//Get Single Post
router.get('/:id', (req, res) => {
    politicsDB.findById(req.params.id)
        .then(post => res.json(post))
        .catch(err => res.status(400).json({ Error: err }))
})

//Delete Single Post
router.delete('/:id', (req, res) => {
    politicsDB.findByIdAndDelete(req.params.id)
        .then(post => res.json(post))
        .catch(err => req.json({ Error: err }))
})

//Update Single Post
router.put('/:id', (req, res) => {
    politicsDB.findById(req.params.id)
        .then(post => {
            post.title = req.body.title ? req.body.title : post.title,
                post.description = req.body.description ? req.body.description : post.description,
                post.picture = req.body.picture ? req.body.picture : post.picture,
                post.content = req.body.content ? req.body.content : post.content,
                post.comment.users = req.body.users ? req.body.users : post.comment.users,
                post.comment.value = req.body.value ? req.body.value : post.comment.value,
                post.comment.date = req.body.date ? req.body.date : post.comment.date,
                post.views = req.body.views ? req.body.views : post.views

            post.save()
                .then(() => res.json(post))
                .catch(err => {
                    res.status(400).json(err)
                })
        })
})

//Commnent Single Post
router.post('/comments/:id', (req, res) => {
    politicsDB.findById(req.params.id)
        .then(member => {
            const { user, value } = req.body
            member.views = 22
            // member.comments = member.comments.push({
            //     "users": user,
            //     "value": value,
            //     "date": Date()
            // })
            member.save().then(() => res.json(post))


            // post.title = req.body.title ? req.body.title : post.title,
            //     post.description = req.body.description ? req.body.description : post.description,
            //     post.picture = req.body.picture ? req.body.picture : post.picture,
            //     post.content = req.body.content ? req.body.content : post.content,
            //     post.comment.users = req.body.users ? req.body.users : post.comment.users,
            //     post.comment.value = req.body.value ? req.body.value : post.comment.value,
            //     post.comment.date = req.body.date ? req.body.date : post.comment.date,
            //     post.views = req.body.views ? req.body.views : post.views

            // post.save().then(() => res.json(post))
            //     .catch(err => {
            //         res.status(400).json(err)
            //     })
        })
        .catch(err => {
            res.status(400).json(err)
        })
})


//Get all Post 
router.get('/', (req, res) => {
    politicsDB.find()
        .then(post => {
            res.json(post)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})
module.exports = router