import {
    CHECK_PRODUCT_REVIEW, 
    UPDATE_DATA_REVIEW, 
    ADD_REVIEW, 
    RESET_DATA_REVIEW, 
} from '../types'
import { review } from './initialState'

const initState = {
    ...review, 
}

function reducer(state = initState, action) {
    switch (action.type) {
        case CHECK_PRODUCT_REVIEW:
            return {...state, ...action.payload}
        break
        case UPDATE_DATA_REVIEW:
            return {...state, ...action.payload}
        break
        case ADD_REVIEW:
            return {...state, ...action.payload}
        break
        case RESET_DATA_REVIEW:
            return {...state, ...review}
        break
        default:
            return state
    }
    return state
}

module.exports = reducer
