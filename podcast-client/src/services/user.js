import { getRequest } from '../axios/axios.config';

export const getAllUser = (pageNo, pageLimit = 20) => {
    return getRequest(`?page=${pageNo}&results=${pageLimit}`)
    // return getRequest(`/user?_page=${2}&_limit=${pageLimit}`)
}