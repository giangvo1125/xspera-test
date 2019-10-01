import { HttpClient } from './http-client'

export const getProduct = (params = '') => {
    return HttpClient.withAPI().get(`/product?${params}`)
}