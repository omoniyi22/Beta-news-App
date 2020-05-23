import { FETCH_POSTS, SEARCH, NEXT_SEARCH, COMMENT, FINANCE_POSTS, SINGLEPOST, ENTERTAINMENT_POSTS, SCI_POSTS, SPORT_POSTS, FOREIGN_POSTS, POST_POST, DELETE_POST, EDIT_POST, SINGLE_MESSAGE, CHANGE_NAV, FETCH_MESSAGES } from "../Actions/type";
import { stat } from "fs";
import Nav from "../component/Nav/Nav";

let initialState = {
    items: [],
    finance: [],
    entertainment: [],
    foreign: [],
    sci: [],
    sport: [],
    newItems: [],
    messages: [],
    item: {},
    edit: {},
    message: {},
    comment: {},
    sp: [],
    search: [],
    nav: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case NEXT_SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case FETCH_POSTS:
            // console.log('fetching')
            return {
                ...state,
                items: action.payload
            }
        case SINGLEPOST:
            // console.log('fetching')
            return {
                ...state,
                sp: action.payload
            }
        case FINANCE_POSTS:
            // console.log('fetching')
            return {
                ...state,
                finance: action.payload
            }
        case CHANGE_NAV:
            return {
                ...state,
                nav: action.payload
            }
        case SCI_POSTS:
            // console.log('fetching')
            return {
                ...state,
                sci: action.payload
            }
        case FOREIGN_POSTS:
            // console.log('fetching')
            return {
                ...state,
                foreign: action.payload
            }
        case ENTERTAINMENT_POSTS:
            // console.log('fetching')
            return {
                ...state,
                entertainment: action.payload
            }
        case SPORT_POSTS:
            // console.log('fetching')
            return {
                ...state,
                sport: action.payload
            }
        case COMMENT:
            // console.log(action.payload)
            return {
                ...state,
                comment: action.payload
            }
        case POST_POST:
            // console.log('fetching')
            return {
                ...state,
                items: action.payload
            }
        case DELETE_POST:
            // console.log(action.payload)
            return {
                ...state,
                newItems: action.payload
            }
        case EDIT_POST:
            console.log(action.payload)
            return {
                ...state,
                edit: action.payload
            }
        case FETCH_MESSAGES:
            console.log(action.payload)
            return {
                ...state,
                messages: action.payload
            }
        case SINGLE_MESSAGE:
            console.log(action.payload)
            return {
                ...state,
                message: action.payload
            }
        // case DELETE_COMMENT:
        //     console.log(action.payload)
        //     return {
        //         ...state,
        //         edit: action.payload
        //     }

        default:
            return state
    }
}