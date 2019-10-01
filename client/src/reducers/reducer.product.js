import {
	GET_PARAM_FILTER_PRODUCT, 
    GET_PRODUCT, 
} from '../types'

const initState = {
    list: immutable.fromJS([]), 
    brandId: '', 
    limit: 10, 
    offset: 0, 
    total: 0, 
}

function reducer(state = initState, action) {
    switch (action.type) {
    	case GET_PARAM_FILTER_PRODUCT:
    		return {...state, ...action.payload}
    	break
        case GET_PRODUCT:
            return {...state, ...action.payload}
        break
        default:
            return state
    }
    return state
}

module.exports = reducer
