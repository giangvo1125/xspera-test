import {
	GET_PARAM_FILTER_PRODUCT, 
    GET_PRODUCT, 
    UPDATE_PRODUCT_PAGINATION, 
} from '../types'

const initState = {
    list: immutable.fromJS([]), 
    brandId: '', 
    ratingMax: 10, 
    showDefaultComment: 1, 
    pagination: immutable.fromJS({
        startPage: 1, 
        totalPages: 1, 
        visiblePages: 5, 
        limit: 10, 
    }), 
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
        default:
            return state
    }
    return state
}

module.exports = reducer
