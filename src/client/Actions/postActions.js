import { FETCH_POSTS, FINANCE_POSTS, ENTERTAINMENT_POSTS, SCI_POSTS, SPORT_POSTS, FOREIGN_POSTS, DELETE_POST, FETCH_MESSAGES, SINGLE_MESSAGE, CHANGE_NAV, POST_POST, EDIT_POST } from "./type";
import { storage } from '../../firebase/index'
import axios from 'axios';
import { async } from "q";


export const entertainmentPosts = () => dispatch => {
    let pol = [];
    return fetch('/news/entertainment')
        .then(res => res.json())
        .then(politics => {
            console.log(politics)
            dispatch({
                type: ENTERTAINMENT_POSTS,
                payload: politics
            });
        }
        );
    // console.log(pol)
}
export const fetchPosts = () => dispatch => {
    let pol = [];
    return fetch('/news/politics')
        .then(res => res.json())
        .then(politics => {
            console.log(politics)
            dispatch({
                type: FETCH_POSTS,
                payload: politics
            });
        }
        );
}
export const financePosts = () => dispatch => {
    let pol = [];
    return fetch('/news/finance')
        .then(res => res.json())
        .then(politics => {
            console.log(politics)
            dispatch({
                type: FINANCE_POSTS,
                payload: politics
            });

        }
        );
    // console.log(pol)
}

export const sportPosts = () => dispatch => {
    let pol = [];
    return fetch('/news/sport')
        .then(res => res.json())
        .then(politics => {
            dispatch({
                type: SPORT_POSTS,
                payload: politics
            });
        }
        );
    // console.log(pol)
}
export const foreignPosts = () => dispatch => {
    let pol = [];
    return fetch('/news/foreign')
        .then(res => res.json())
        .then(politics => {
            dispatch({
                type: FOREIGN_POSTS,
                payload: politics
            });
        }
        );
    // console.log(pol)
}
export const sciPosts = () => dispatch => {
    let pol = [];
    return fetch('/news/science')
        .then(res => res.json())
        .then(politics => {
            dispatch({
                type: SCI_POSTS,
                payload: politics
            });
        }
        );
    // console.log(pol)
}






export const deletePost = (a) => {
    return axios(`Admin/delete/${a[0]}/${a[1]}`)
        .then((res) => {
            console.log(res)
            return res.data
        })
        .then(dat => dispatch => {
            dispatch({
                type: DELETE_POST,
                payload: dat.politics
            })
        })
}


export const upload = post => {
    const uf = new FormData()
    uf.append('file', post.file, post.filename)
    const uploadTask = storage.ref(`images/${post.filename}`).put(post.file)
    return uploadTask.on('state_changed',
        (snapshot) => { },
        (error) => { console.log(error) },
        () => {
            return storage.ref('images').child(post.filename).getDownloadURL().then(res => {
                if (res) {
                    console.log(res)
                    return axios.post(`admin/${post.type}`, {
                        type: `${post.type}`,
                        title: post.title,
                        description: post.description,
                        picture: res,
                        content: post.content
                    }).then(data => dispatch => {
                        return dispatch({
                            type: FETCH_POSTS,
                            payload: data.data.politic
                        })
                    })
                }
            })
        }
    )
    // return axios.post(`Admin/news/upload`, uf).then(res => {
    //     console.log(res)

    // })
}

export const changeNav = nav => async dispatch => {
    await dispatch({
        type: CHANGE_NAV,
        payload: nav
    })
}

export const editPost = data => async dispatch => {
    await dispatch({
        type: EDIT_POST,
        payload: data
    });
    console.log(data)

}



export const openMessage = data => async dispatch => {
    await dispatch({
        type: SINGLE_MESSAGE,
        payload: data
    });
}


export const fetchMessages = () => dispatch => {
    fetch('/admin/message')
        .then(res => res.json())
        .then(politics => {
            dispatch({
                type: FETCH_MESSAGES,
                payload: politics.messages
            });
        }
        );
    // console.log(pol)
}




export const deleteComment = deleteData => dispatch => {
    axios.post(`Admin/comment/${deleteData[0]}/${deleteData[1]}`,
        { comment: deleteData[2] }
    )
        .then(res => res.data)
        .then(data => {
            console.log(data)
        })

    // dispatch({
    //     type: DELETE_POST,
    //     payload: res.data.politics
    // });


}