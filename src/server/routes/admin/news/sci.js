const express = require('express');
router = express.Router();
const scienceDB = require('../../../models/News/sci')
const error = []


//Posting a single post
router.post('/science', (req, resp) => {
    const {
        title,
        description,
        picture,
        content,
        type
    } = req.body
    if (!title && !description && !content) {
        error.push({ msg: 'All fields are empty' })
    }
    if (!title) {
        error.push({ msg: 'Title is empty' })
    }
    if (!description) {
        error.push({ msg: "Description is empty" })
    }
    if (!content) {
        error.push({ msg: "Content is empty" })
    }

    if (error.length > 0) {
        resp.json(error)
    } else {
        scienceDB.find().then(res => {
            const newPost = new scienceDB({
                id: res.length == 0 ? 1 : res.length + 1,
                type: 'science',
                title: title,
                description: description,
                picture: picture,
                content: content,
                comments: [],
                views: null,
                date: Date()
            })
            newPost.save().then((politic) => {
                resp.json({ msg: 'POST SENT SUCCESFULLY', politic })
            }).catch(err => { console.log(err) })
        })
    }
})


// Update a SinglePost
router.post('/update/science/:id', (req, res) => {
    const { title, description, picture, content } = req.body
    scienceDB.findById(req.params.id)
        .then(member => {
            member.title = title ? title : member.title
            member.picture = picture ? picture : member.picture
            member.description = description ? description : member.description
            member.content = content ? content : member.content
            member.save().then((member) => {
                res.json({ msg: 'member Updated', member })
            })
        }).catch(err => {
            res.send(err)
        })
})


//Delete any Politics
router.get('/delete/science/:id', (req, res) => {
    scienceDB.findById(req.params.id).then(() => {
        const Delete = async (d = req.params.id) => {
            try {
                await scienceDB.findByIdAndDelete(d)
                console.log("post deleted")
                res.json({ msg: "Post Deleted" })
            } catch (error) {
                console.log('error')

                res.json({ error: "There is an error" })
            }
        }
        Delete()
    }).catch(() => {
        res.json({ error: "No member with such an id" })
    })
})



//Deleting a Comment
router.post('/comment/science/:id', (req, resp) => {
    scienceDB.findById(req.params.id).then((member) => {
        if (req.body.comment !== 'all' && member.comments.length > 0) {

            c = member.comments
            let z = member.comments[req.body.comment]
            function r() {
                b = []
                let c = member.comments
                for (a in c) {
                    b.push(c[a])
                    if (a == req.body.comment) {
                        b.pop()
                        console.log(a)
                    }
                }
                console.log(b)
                member.comments = b
            }
            r()
            member.save().then(res => {
                resp.json({
                    "politic": member, mg: "Comment deleted !"
                })
            })
        } else if (req.body.comment == 'all') {
            member.comments = []
            member.save().then(res => {
                resp.json({
                    "politic": member, mg: "All Comment deleted !"
                })
            })
        }
        else if (member.comments.length === 0) {
            resp.json({
                "politic": member, mg: "No Comment to deleted !"
            })
        }
    })
})



router.post('/views/science/:id', (req, res) => {
    let { views, view } = req.body
    scienceDB.findById(req.params.id).then((member) => {
        if (views > 0 && views) {
            member.views = views
            member.save().then(member).then(() => {
                console.log(views)
                res.json({ politics: member.views, msg: "View updated" })
            })
        }
        else if (views <= 0) {
            member.views = views
            member.save().then(member).then(() => {
                console.log(views)
                res.json({ politics: member.views, msg: "View is 0" })
            })
        } else if (!views && !view) {
            member.views = member.views
            res.json({ politics: member.views, msg: "Fill in views" })
        } else if (view) {
            member.views = Number(member.views) + 1
            member.save().then(member).then(() => {
                console.log(views)
                res.json({ politics: member.views })
            })
        }
    })
})

router.post('/delete/views/science/:id', (req, res) => {
    let { remove, add } = req.body
    scienceDB.findById(req.params.id).then(member => {
        if (remove) {
            if (remove && member.views !== 0) {
                member.views = 0

                member.save().then(member => {
                    res.json({ politics: member.views, msg: "View deleted" })
                })
            } else {
                res.json({ politics: member.views, msg: "View is empty" })
            }

        } else {
            res.json({ error: 'No member with such id' })
        }
    })
})
module.exports = router