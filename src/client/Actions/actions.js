import { userConstants } from './constants'

let { getUsersAPI } = require('./api')
export const getUsers = (perPage, currentPage, searchValue) => {
  return (dispatch) => {
    dispatch({
      type: userConstants.LIST_USERS_REQUEST,
    });
    return getUsersAPI(perPage, currentPage, searchValue)
      .then((response) => {
        console.log("response")
        dispatch({
          type: userConstants.LIST_USERS_SUCCESS,
          payload: response.data,
        });
        return Promise.resolve(response);
      })
      .catch((err) => {
        dispatch({
          type: userConstants.LIST_USERS_FAILURE,
          payload: { err },
        });
        return Promise.reject(err);
      });
  };
};
