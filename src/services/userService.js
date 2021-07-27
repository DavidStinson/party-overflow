const BASE_URL = '/api/users/'

const getTopUsers = async () => {
    try {
        const res = await fetch(`${BASE_URL}/top-users`, { mode: "cors" })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export {
  getTopUsers
}