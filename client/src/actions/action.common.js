import {
	LOADING, 
} from '../types'

export const loading = (loading = false) => (dispatch, getState) => {
	dispatch({
		type: LOADING, 
		payload: {loading}
	})
}