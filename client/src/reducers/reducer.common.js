import {
	LOADING, 
} from '../types'

const initState = {
    loading: false, 
}

function reducer(state = initState, action) {
    switch (action.type) {
        case LOADING:
            return {...state, ...action.payload}
        break
        default:
            return state
    }
    return state
}

module.exports = reducer
