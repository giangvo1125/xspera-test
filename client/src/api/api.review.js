import { HttpClient } from './http-client'

export const addReview = (body = {}) => {
    return HttpClient.withAPI().post(`/product/review`, body)
}