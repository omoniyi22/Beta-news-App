const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const My_Users = require('./../models/User')


//_Targets_
// users: action.payload.results,
// isLoading: false,
// totalPages: action.payload.page_count,
// currentPage: action.payload.current_page,
// itemsPerPage: action.payload.items_per_page,
// previous: action.payload.previous,
// next: action.payload.next,

router.get((`/users` || '/settings/user'), (req, response) => {
    let { page, page_size, search, rowsPerPage } = req.query
    //currentPage perPage searchValue

    function fola(users) {
        let perPage = page_size
        no_of_pages = Math.ceil(users.length / perPage)
        let i = 0
        let slicedResult
        let results = []     //users returned

        while (i < no_of_pages) {
            slicedResult = users.splice(0, perPage)
            results.push(slicedResult)
            i++
        }
        return ({
            results: results[page - 1],
            page_count: Number(results.length),
            current_page: Number(page),
            items_per_page: Number(results[page - 1].length),
            next: page == results.length ? null : Number(page) + 1,
            previous: page == 1 ? null : Number(page - 1),
        })

    }
    My_Users.find()
        .then(res => {
            allFoundResults = res.filter(seat => new RegExp(search, 'i').test(seat.email))
            if (allFoundResults.length == 0) {
                response.json({
                    results: [[]],
                    page_count: Number(0),
                    current_page: Number(0),
                    items_per_page: Number(0),
                    next: null,
                    previous: null
                })
            } else {
                response.json(fola(allFoundResults))
            }

        })
})



// i just used this to fetch data
router.post('/my_users', (req, res) => {
    let user = new My_Users({
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name
    })
    user.save()
        .then(resp => {
            res.json(resp)
        }).catch(rep => {
            res.json(rep)
        })
    // return My_Users.find()
    //     .then(resp => {
    //         res.send(page)
    //     })
})
module.exports = router