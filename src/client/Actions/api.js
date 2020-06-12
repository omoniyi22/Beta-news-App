import axios from 'axios';
export function getUsersAPI(perPage, currentPage, searchValue) {
  return axios.get(
    `/users?page=${currentPage}&page_size=${perPage}&search=${searchValue}`
  );
}
