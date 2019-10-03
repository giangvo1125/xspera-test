import {
	LOADING, 
} from '../types'

import { common } from './initialState'

const initState = {
    ...common, 
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
