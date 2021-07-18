import tokenService from '../services/tokenService'
const BASE_URL = '/api/comments/'

export function createComment(postId, comment) {
    return fetch(`${BASE_URL}${postId}`, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${tokenService.getToken()}`
        },
        body: JSON.stringify(comment)
    }, { mode: "cors" })
        .then(res => res.json())
}


export function updateComment(commentId, postId, userId) {
    return fetch(`${BASE_URL}${commentId}/${postId}/${userId}`, {
        method: "PUT",
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
    }, { mode: "cors" })
        .then(res => res.json())
}

export function deleteComment(postId, commentId) {
    return fetch(`${BASE_URL}${postId}/${commentId}`, {
        method: 'DELETE',
        headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
    }, { mode: "cors" })
        .then(res => res.json())
}

