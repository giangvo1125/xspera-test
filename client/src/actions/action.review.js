import {
	CHECK_PRODUCT_REVIEW, 
	UPDATE_DATA_REVIEW, 
	ADD_REVIEW, 
	RESET_DATA_REVIEW, 
} from '../types'

import { loading } from './action.common'

export const checkProductReview = () => (dispatch, getState) => new Promise((resolve, reject) => {
	let data = selectors.reviewDataSelector(getState()),
		{routing: {locationBeforeTransitions: {query}}} = getState()
	if(query && query.productId) {
		dispatch(loading(true))
		apiService.getProduct(`productId=${query.productId}`)
		.then(response => {
			dispatch(loading(false))
			let {status, data: products} = response
			if(status == 200) {
				let {rows} = products
				if(rows.length > 0) {
					data = data.set('productId', query.productId)
					data = data.set('productName', rows[0].name)
					dispatch({
						type: CHECK_PRODUCT_REVIEW, 
						payload: {data}
					})
					resolve(CHECK_PRODUCT_REVIEW)
				}
				else {
					reject('not_found_product')
				}
			}
		}, err => {
			dispatch(loading(false))
			let {data} = err.response,
				msg = data && data.msg ? data.msg : 'error'
			reject(msg)
		})
	}
	else {
		reject('error')
	}
})

export const updateDataReview = (key = '', value = '') => (dispatch, getState) => {
	let data = selectors.reviewDataSelector(getState())
	data = data.set(key, value)
	dispatch({
		type: UPDATE_DATA_REVIEW, 
		payload: {data}
	})
}

export const onSaveReview = () => (dispatch, getState) => new Promise((resolve, reject) => {
	let data = selectors.reviewDataSelector(getState()).toJS(),
		valid = true

	for(let key in data) {
		if(['userId', 'rating'].indexOf(key) == -1 && !data[key]) {
			valid = false
		}
	}
	if(!valid) {
		reject('required')
	}
	else {
		dispatch(loading(true))
		apiService.getUserByEmail(data.email)
		.then(response => {
			var {data: {uid}, status} = response
			if(status == 200) {
				let body = {
					userUID: uid, 
					productUID: data.productId, 
					comment: data.comment, 
					rating: data.rating, 
				}
				return apiService.addReview(body)
			}
			else {
				throw 'error'
			}
		}, err => {
			throw err
		})
		.then(response => {
			dispatch(loading(false))
			let {data, status} = response
			if(status == 200) {
				dispatch({
					type: ADD_REVIEW, 
					payload: {}
				})
				resolve(ADD_REVIEW)
			}
			else {
				reject('error')
			}
		}, err => {
			dispatch(loading(false))
			let {data} = err.response,
				msg = data && data.msg ? data.msg : 'error'
			reject(msg)
		})
	}

})

export const resetDataReview = () => dispatch => new Promise((resolve, reject) => {
	dispatch({
		type: RESET_DATA_REVIEW, 
	})
	resolve(RESET_DATA_REVIEW)
})

