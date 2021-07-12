import tokenService from '../services/tokenService'
const BASE_URL = '/api/posts/'

export function getRecent(page) {
    return fetch(`${BASE_URL}${page}`, { mode: "cors" })
        .then(res => res.json())
}

export function createPost(post) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getToken()}`
        },
        body: JSON.stringify(post)
    }, { mode: "cors" })
        .then(res => res.json())
}

export function updatePost(post) {
    return fetch(`${BASE_URL}${post._id}`, {
        method: "PUT",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(post) //remove?
    }, { mode: "cors" })
        .then(res => res.json())
}

export function deletePost(id) {
    return fetch(`${BASE_URL}${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    }, { mode: "cors" })
        .then(res => res.json())
}
