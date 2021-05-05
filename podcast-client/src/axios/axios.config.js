import axios from 'axios';

const api = axios.create({
    baseURL: `https://randomuser.me/api/`,
    headers: {
        Accept: 'application/json',
    }
})


export const getRequest = (url, headers = true) => {
    return api.get(url)
}

export const postRequest = (url, data, headers = true) => {
    return api.post(url, data)
}

export const putRequest = (url, data, headers = true) => {
    return api.put(url, data)
}

export const patchRequest = (url, data, headers = true) => {
    return api.patch(url, data)
}

export const deleteRequest = (url, headers = true) => {
    return api.delete(url)
}