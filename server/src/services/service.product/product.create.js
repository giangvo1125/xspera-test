import model from '../../models'
import {checkBrand} from '../service.brand'

export default (body = {}) => new Promise((resolve, reject) => {
	if(body) {
		let {brand_id, name, price} = body
		if(!brand_id || !name || !price) {
			reject('not found params')
		}
		else {
			checkBrand({id: brand_id})
			.then(brand => {
				return model.products.findOne({
					where: {
						brand_id: brand_id, 
						name: name, 
					}
				})
			}, err => {
				throw err
			})
			.then(product => {
				if(product) {
					throw 'product_existed'
				}
				else {
					return model.products.create({...body})
				}
			}, err => {
				throw err
			})
			.then(product => {
				resolve(product)
			}, err => {
				reject(err)
			})
		}
	}
	else {
		reject('not_found_params')
	}
	
})