import { HttpClient } from './http-client'

export const login = data => {
    return HttpClient.withAPI().get(`/product`)
}