import model from '../models'
import { product as productService, user as userService, common } from '../services'

//function get product by conditions
const getProduct = (req, res, next) => {
	let {brandId, limit, offset, productId} = req.query
	var condition = {
		order: [
			['id', 'DESC'], 
			[model.reviews, 'id', 'DESC'], 
		], 
		limit: limit && parseInt(limit, 10) ? parseInt(limit) : 10, 
		offset: offset && parseInt(offset, 10) ? parseInt(offset) : 0, 
		include: [
			{
				model: model.brands, 
				attributes: ['name'], 
				required: true, 
				where: brandId ? {id: brandId} : {}, 
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
		attributes: ['uuid', 'name', 'description', 'rating' ], 
		// subQuery: false, 
		distinct: true, 
		where: productId ? {uuid: productId} : {}
	}
	productService.getProduct(condition)
	.then(result => {
		res.status(200).send(result)
	}, err => {
		console.log('err ',err)
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

const createProduct = (req, res, next) => {
	var data = req.body
	productService.createProduct(data)
	.then(result => {
		res.status(200).send({msg: 'create successfully'})
	}, err => {
		common.errorRes(res, err)
	})
}

module.exports = {
	getProduct, 
	addReview, 
	createProduct, 
}