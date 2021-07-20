import tokenService from './tokenService'
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
            console.log(data, '<-- the error')
        }
    } catch (error) {
        throw error
    }
}

export const login = async (creds) => {
    try {
        const res = await fetch(`${BASE_URL}login`, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(creds)
        })
        const data = await res.json()
        if (data.token) {
            tokenService.setToken(data.token)
        } else {
            console.log(data, '<-- the error')
        }
    } catch (error) {
        throw error
    }
}

export function logout() {
    tokenService.removeToken()
}

