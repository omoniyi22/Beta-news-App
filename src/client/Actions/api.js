import axios from 'axios';
export function getUsersAPI(perPage, currentPage, searchValue) {
  let params = new URLSearchParams(window.location.search)

  if (params.has('search')) {
    searchValue = params.get("search")
  }
  if (params.has('rowsPerPage')) {
    perPage = params.get("rowsPerPage")
  }
  if (params.has('page')) {
    currentPage = params.get("page")
  }

  return axios.get(
    `/users?page=${currentPage}&page_size=${perPage}&search=${searchValue}`
  );
}
