import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './reducers'

export default combineReducers({
    posts: postReducer,
    user: userReducer

})