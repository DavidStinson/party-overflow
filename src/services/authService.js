import * as tokenService from './tokenService'
const BASE_URL = '/api/auth/'

export function getUser() {
    return tokenService.getUserFromToken()
}

export const getTopUsers = async () => {
    try {
        const res = await fetch(BASE_URL, { mode: "cors" })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export const signup = async (user) => {
    try {
        const res = await fetch(`${BASE_URL}signup`, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(user)
        })
        const data = await res.json()
        if (data.token) {
            tokenService.setToken(data.token)
        } else {
            throw Error(data.err)
        }
    } catch (error) {
        throw Error(error)
    }
}

export const login = async (creds) => {
    const res = await fetch(`${BASE_URL}login`, {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(creds)
    })
    if (res.ok) {
        const data = await res.json()
        tokenService.setToken(data.token)
    } else {
        throw new Error()
    }
}


export function logout() {
    tokenService.removeToken()
}