import * as tokenService from '../services/tokenService'
const BASE_URL = '/api/posts/'

export const createComment = async (postId, comment) => {
    try {
        const res = await fetch(`${BASE_URL}${postId}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${tokenService.getToken()}`
            },
            body: JSON.stringify(comment)
        }, { mode: "cors" })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export const markCommentAsSolution = async (commentId, postId) => {
    try {
        const res = await fetch(
          `${BASE_URL}${postId}/comments/${commentId}/mark-as-solution`, 
          {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + tokenService.getToken()
            },
          }, { mode: "cors" }
        )
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export const deleteComment = async (postId, commentId) => {
    try {
        const res = await fetch(`${BASE_URL}${postId}/comments/${commentId}`, {
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + tokenService.getToken() }
        }, { mode: "cors" })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}