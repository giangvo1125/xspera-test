import model from '../models'
import { product } from '../services'

const get = (req, res, next) => {
	let {brandId, limit} = req.query
	var condition = {
		order: [
			['id', 'DESC']
		], 
		limit: limit ? limit : 10, 
		include: [
			{
				model: model.brands, 
				attributes: ['name'], 
				required: true, 
				where: brandId ? {uuid: brandId} : {}, 
			}, 
			{
				model: model.reviews, 
				attributes: [ 'uuid', 'rating', 'comment'], 
				include:[
					{
						model: model.users,
						required: true, 
						attributes: ['username']
					}
				], 
				required: false, 
			},
		], 
		attributes: ['uuid', 'name', 'description' ], 
		subQuery: false, 
	}
	product.get(condition)
	.then(result => {
		res.status(200).send(result)
	}, err => {
		console.log('err ',err)
		res.status(400).send('error')
	})
}

module.exports = {
	get, 
}