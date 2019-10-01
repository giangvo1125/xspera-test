import model from '../models'
import { product as productService, user as userService, common } from '../services'

//function get product by conditions
const getProduct = (req, res, next) => {
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
						required: false, 
						attributes: ['username']
					}
				], 
				required: false, 
			},
		], 
		attributes: ['uuid', 'name', 'description' ], 
		// subQuery: false, 
		distinct: true, 
	}
	productService.getProduct(condition)
	.then(result => {
		res.status(200).send(result)
	}, err => {
		common.errorRes(res, err)
	})
}

//function create review for product
const addReview = (req, res, next) => {
	var data = req.body
	userService.checkUser(data.userUID, 'Customer')
	.then(user => {
		return productService.addReview(data)
	}, err => {
		throw err
	})
	.then(result => {
		res.status(200).send({msg: 'create successfully'})
	}, err => {
		common.errorRes(res, err)
	})
}

module.exports = {
	getProduct, 
	addReview, 
}