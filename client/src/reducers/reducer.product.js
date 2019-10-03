import {
	GET_PARAM_FILTER_PRODUCT, 
    GET_PRODUCT, 
    UPDATE_PRODUCT_PAGINATION, 
    RESET_DATA_PRODUCT, 
} from '../types'

import { product } from './initialState'

const initState = {
    ...product, 
}

function reducer(state = initState, action) {
    switch (action.type) {
    	case GET_PARAM_FILTER_PRODUCT:
    		return {...state, ...action.payload}
    	break
        case GET_PRODUCT:
            return {...state, ...action.payload}
        break
        case UPDATE_PRODUCT_PAGINATION:
            return {...state, ...action.payload}
        break
        case RESET_DATA_PRODUCT:
            return {...state, ...product}
        break
        default:
            return state
    }
    return state
}

module.exports = reducer
