import { HttpClient } from './http-client'

export const getUserByEmail = (email = '') => {
    return HttpClient.withAPI().get(`/user?email=${email}`)
}