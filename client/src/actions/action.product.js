import {
	GET_PARAM_FILTER_PRODUCT, 
	GET_PRODUCT, 
} from '../types'

import { loading } from './action.common'

export const getParamFilterProduct = () => (dispatch, getState) => {
	let {routing: {locationBeforeTransitions: {query}}} = getState()
	if(query && query.brandId) {
		dispatch({
			type: GET_PARAM_FILTER_PRODUCT, 
			payload: { brandId: query.brandId }
		})
	}
}

export const getProduct = () => (dispatch, getState) => new Promise((resolve, reject) => {
	let { brandId, limit, offset } = getState().product
	dispatch(loading(true))
	apiService.getProduct(`brandId=${brandId}`)
	.then(response => {
		dispatch(loading(false))
		let { status, data } = response
		if(status == 200) {
			let { count, rows } = data
			dispatch({
				type: GET_PRODUCT, 
				payload: { total: count, list: immutable.fromJS(rows) }
			})
		}
	}, err => {
		dispatch(loading(false))
		console.log('err ',err)
	})
})