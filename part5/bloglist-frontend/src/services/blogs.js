import axios from 'axios'
const baseUrl = '/api/blogs'
let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
    return token
}

const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.data
}

const create = async (newObject, token) => {
    const config = {
        headers: { Authorization: `bearer ${token}` }
    }
    const request = await axios.post(baseUrl, newObject, config)
    return request
}

const deleteList = (blogId, token) => {
    const config = {
        headers: { Authorization: `bearer ${token}` }
    }
    const request = axios.delete(`${baseUrl}/${blogId}`, config)
    return request
}

const updateLikes = async (blogId, blog) => {
    const blogObj = { ...blog }
    blogObj.likes++
    const request = await axios.put(`${baseUrl}/${blogId}`, blogObj)
    return request.data
}

export default { getAll, create, setToken, deleteList, updateLikes }
