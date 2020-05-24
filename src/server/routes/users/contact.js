const express = require('express');
const nodemailer = require('nodemailer');
router = express.Router();
const Contact = require('./../../models/Contact');

// router.use(express.cors())
router.get('/contact', (req, res) => {
    res.send('Hello')
})

router.post('/contact', (req, res) => {
    const { first_name, last_name, email, subject, message } = req.body;
    const newUser = new Contact({
        first_name,
        last_name,
        email: req.body.email,
        subject,
        message,
        read: false,
        date: Date(),
        dot: Date()
    });

    newUser.save().then((user) => {
        res.json({ mg: 'Message has been succesfully' })
        console.log({ mg: 'Message has been succesfully' })
    }).catch((err) => console.log(err));


    const output = `
    <h3>A NEW MESSAGE FROM NEWSAPP</h3>
    <ul>
    <li>Name: ${req.body.first_name + req.body.last_name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message:</h3>
    <p>Message: ${req.body.message}</p>`;

    //Create reusable transporter object using the default SMTP transport

    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     port: 465,
    //     secure: true, // true for 465, false for other ports
    //     auth: {
    //         user: 'omoniyioluwaseun22@gmail.com', // generated etheral user
    //         pass: "seun2322" // generated ethereal password
    //     },
    //     tls: {
    //         rejectUnauthorized: false
    //     }

    // });

    // //setup email data with unicode symbols
    // let mailOptions = {
    //     from: "Beta News",
    //     to: `omoniyioluwaseun22@gmail.com,${req.body.subject}, omoniyioluwaseun00@gmail.com, oyinadefunmilayo@gmail.com`,
    //     subject: req.body.subject,
    //     html: output
    // }

    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log('Message sent: %s', info.messageId);
    //     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // })


    // res.json(req.body)
    // console.log(req.body)
})



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
router.get('/message/delete/:id', (req, res) => {
    const deleteMessage = async (d = req.params.id) => {
        try {
            await Contact.findByIdAndDelete(d)
                .then(() => res.json({ msg: "Message Deleted" })
                )
        } catch (error) {
            res.json({ error: "There is an error" })
        }
    }
    deleteMessage()
})

router.get('/message/read/:id', (req, res) => [
    Contact.findById(req.params.id)
        .then(data => {
            data.read = true;
            data.save()
                .then(() => res.json(data))
        })
        .catch(err => {
            res.json({ error: err })
        })

])


module.exports = router