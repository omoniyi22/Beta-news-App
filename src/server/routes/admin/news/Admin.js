const express = require('express');
router = express.Router();
const Contact = require('../../../models/Contact');
const User = require('../../../models/User')
var politics = require('../../../Apis/Newsapi').Politics;
const politicsDB = require('../../../models/News/politics')
// const fs = require('fs')


//View all Contacts
router.get('/message', (req, res) => {
    const contact = async () => {
        try {
            let messages = await Contact.find();
            res.json({ messages, msg: 'msg' })
        } catch (error) {
            res.json({ error: error })
        }
    }
    contact()
})

//Delete Contact
router.delete('/message/:id', (req, res) => {
    User.findById(req.params.id).then(() => {
        const deleteMessage = async (d = req.params.id) => {
            try {
                await Contact.findByIdAndDelete(d)
                res.json({ msg: "Message Deleted" })
            } catch (error) {
                res.json({ error: "There is an error" })
            }
        }
        deleteMessage()
    }).catch(() => {
        res.json({ error: "No member with such an id" })
    })
})


//View all Users
//View all Users
router.get('/user', (req, res) => {
    const user = async () => {
        try {
            let user = await User.find();
            res.json({ user, msg: 'msg' })
        } catch (error) {
            res.json({ error: error })
        }
    }
    user()
})

//Delete any User
router.delete('/user/:id', (req, res) => {
    User.findById(req.params.id).then(() => {
        const deleteUser = async (d = req.params.id) => {
            try {
                await User.findByIdAndDelete(d)
                res.json({ msg: "User Deleted" })
            } catch (error) {
                res.json({ error: "There is an error" })
            }
        }
        deleteUser()
    }).catch(() => {
        res.json({ error: "No member with such an id" })
    })
})




// Admin Access //
const error = []
//upload file
router.post('/news/upload', (req, res) => {
    const { file } = req.files
    //Upload picture
    if (!req.files) {
        error.push({ msg: 'No file Uploaded' })
        // return res.status(400).json({ msg: 'No file Uploaded' });
    } else {
        file.mv(`${__dirname}/../../../../public/uploads/${file.name}`, err => {
            if (err) {
                error.push({ msg: "Unsuccessful upload" })
                console.error(err);
                return res.status(500).send(err)
            } else {
                // return res.status(500).send(err)
                res.json({ fileName: file.name, filePath: `/${file.name}` });
                console.log({ fileName: file.name, filePath: `/${file.name}` });
            }
        })
    }
}
)


//Posting a single post
router.post('/news/politics', (req, res) => {
    //Upload picture
    const {
        title,
        description,
        picture,
        content
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
        res.json(error)
    } else {
        const Politics =
        {
            id: politics.length == 0 ? 1 : politics[0].id + 1,
            type: 'politics',
            title: title,
            description: description,
            picture: picture,
            content,
            comments: [],
            date: Date(),
            views: null
        }
        politics.unshift(Politics)

        res.json({ msg: 'POST SENT SUCCESFULLY', politic: politics })
        politicsDB.find().then(res => {

            const newPost = new politicsDB({
                id: res.length == 0 ? 1 : res.length + 1,
                type: 'politics',
                title: title,
                description: description,
                picture: picture,
                content: content,
                comments: [],
                views: null,
                date: Date()
            })

            newPost.save().then((res) => {
                console.log('Post has been saved succesfully', res)
            }).catch(err => { console.log(err) })
        })

    }
})


// Update a SinglePost
router.post('/update/news/politics/:id', (req, res) => {
    // const found = politicsDB.some(member => member.id === parseInt(req.params.id))
    // let poly = politicsDB.filter(member => member.id === parseInt(req.params.id))
    const { title, description, picture, content } = req.body
    // if (found) {

    politicsDB.findById(req.params.id)
        .then(member => {
            // post.forEach(member => {
            // let pix = member.picture
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
    // } else {
    //     res.status(400).json({ msg: 'No Member of such Id' })
    // }
})
// })


//Deleting a Single Post

//Delete any Politics
router.get('/delete/news/politics/:id', (req, res) => {
    politicsDB.findById(req.params.id).then(() => {
        const Delete = async (d = req.params.id) => {
            try {
                await politicsDB.findByIdAndDelete(d)
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
router.post('/delete/comment/news/politics/:id', (req, resp) => {
    politicsDB.findById(req.params.id).then((member) => {
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
    // console.log(member.length)
    // } else {
    //     res.status(400).json({ msg: "No member with such Id" })
    // }
})



router.post('/views/news/politics/:id', (req, res) => {
    let { views, view } = req.body
    politicsDB.findById(req.params.id).then((member) => {
        // if (found) {
        // poly.forEach(member => {
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
        // })
        // } else {
        //     res.json({ error: 'No member with such id' })
        // }

    })
})
// })


router.post('/viewsdelete/news/politics/:id', (req, res) => {
    let { remove, add } = req.body
    // const found = politics.some(member => member.id === parseInt(req.params.id))
    // let poly = politics.filter(member => member.id === parseInt(req.params.id))
    politicsDB.findById(req.params.id).then(member => {
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

// Delete or Edit views 
// router.post('/views/news/politics/:id', (req, res) => {
//     const found = politics.some(member => member.id === parseInt(req.params.id))
//     let politic = politics.filter(member => member.id === parseInt(req.params.id))

// })
//Contact



module.exports = router