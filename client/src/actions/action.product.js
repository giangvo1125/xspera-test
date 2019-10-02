import {
	GET_PARAM_FILTER_PRODUCT, 
	GET_PRODUCT, 
	UPDATE_PRODUCT_PAGINATION, 
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
	let {brandId, pagination} = getState().product,
		limit = pagination.get('limit')
	dispatch(loading(true))
	apiService.getProduct(`limit=${limit}&offset=${(pagination.get('startPage') - 1) * limit}&brandId=${brandId}`)
	.then(response => {
		dispatch(loading(false))
		let { status, data } = response
		if(status == 200) {
			let { count, rows } = data,
				totalPages = Math.trunc(count/limit) + (count%limit > 0 ? 1 : 0)
			pagination = pagination.set('totalPages', totalPages)
			dispatch({
				type: GET_PRODUCT, 
				payload: { pagination, list: immutable.fromJS(rows) }
			})
			resolve(GET_PRODUCT)
		}
	}, err => {
		dispatch(loading(false))
		reject(GET_PRODUCT)
	})
})

export const updateProductPagination = (pageNumber = 0) => (dispatch, getState) => new Promise((resolve, reject) => {
	let {pagination} = getState().product
	pagination = pagination.set('startPage', pageNumber)
	dispatch({
		type: UPDATE_PRODUCT_PAGINATION, 
		payload: {pagination}
	})
	resolve(UPDATE_PRODUCT_PAGINATION)
})
