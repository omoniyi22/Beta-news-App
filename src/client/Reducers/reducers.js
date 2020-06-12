import { userConstants } from "./../Actions/constants";

export const initialState = {
  users: [],
  isLoading: false,
  totalPages: null,
  currentPage: null,
  itemsPerPage: null,
  previous: null,
  next: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LIST_USERS_REQUEST:
      return {
        ...state,
        users: null,
        isLoading: true,
        totalPages: null,
        currentPage: null,
        itemsPerPage: null,
        previous: null,
        next: null,
      };
    case userConstants.LIST_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.results,
        isLoading: false,
        totalPages: action.payload.page_count,
        currentPage: action.payload.current_page,
        itemsPerPage: action.payload.items_per_page,
        previous: action.payload.previous,
        next: action.payload.next,
      };
    case userConstants.LIST_USERS_FAILURE:
      return {
        ...state,
        users: null,
        isLoading: false,
        totalPages: null,
        currentPage: null,
        itemsPerPage: null,
        previous: null,
        next: null,
      };

    default:
      return state;
  }
};

export default userReducer;
