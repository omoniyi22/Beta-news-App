import axios from 'axios'
import { fetchPosts } from './Actions/postActions'
import { FETCH_MESSAGES } from "./Actions/type";


export const register = newUser => {
    return axios.post('/register', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password,
        password2: newUser.password2,
        user_email: newUser.email,
        phone: newUser.phone
    }).then(res => {
        if (res.data) {
            return res.data
        }
    })
}

export const login = user => {
    return axios.post('/login', {
        email: user.email,
        password: user.password
    })
        .then(res => {
            if (res.data.error) {
                return res.data;
                console.log(res.data);
            } else {
                localStorage.setItem('usertoken', res.data)
                return res.data
            }
        })
        .catch(err => {
            console.log(err)
        })
}

export const contact = newUser => {
    return axios.post('/contact', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        subject: newUser.subject,
        message: newUser.message
    }).then(res => {
        if (res.data) {
            return res.data;
        }
    }).catch((err) => {
        throw err
    })
}





export const update = async post => {
    // const uf = new FormData()
    // if (post.file && post.filename) {
    //     uf.append('file', post.file, post.filename)
    //     await axios.post(`Admin/news/upload`, uf)
    return axios.post(`Admin/update/${post.type}/${post.id}`, {
        title: post.title,
        description: post.description,
        picture: post.picture,
        content: post.content
    }).then(
        (res) => {
            console.log(res)
            return res.data

        }
    )
    // return promise2.data
    // } else {
    // const promise2 = await axios.post(`Admin/update/news/${post.type}/${post.id}`, {
    //     title: post.title,
    //     description: post.description,
    //     content: post.content
    // })
    // }
}



// export const upload = post => {
//     const uf = new FormData()
//     uf.append('file', post.file, post.filename)
//     const promise1 = axios.post(`news/upload`, uf)
//     const promise2 = axios.post('news/politics', {
//         type: post.title,
//         title: post.title,
//         description: post.description,
//         picture: post.picture,
//         content: post.content
//     })

//     Promise.all([promise1, promise2]).then(
//         values => {
//             console.log(values)

//         },
//         reason => {
//             console.log(reason)
//         })
// }

// export const upload = async post => {
//     const uf = new FormData()
//     uf.append('file', post.file, post.filename)
//     return axios.post(`news/upload`, uf).then(res => {
//         if (res) {
//             return axios.post('news/politics', {
//                 type: post.title,
//                 title: post.title,
//                 description: post.description,
//                 picture: post.picture,
//                 content: post.content
//             })
//         }
//     })
// }

export const deleted = newUser => {
    return axios(`Admin/delete/news/politics/${newUser}`).then(res => {
        if (res.data) {
            return res.data;
        }
    }).catch((err) => {
        throw err
    })
}


export const deleteMessage = data => {
    fetch(`/message/delete/${data}`)
        .then(res => res.json().msg)
}