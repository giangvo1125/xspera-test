import model from '../../models'
import validateReview from './product.review.validate'

export default ({productUID, userUID, rating, comment}) => new Promise((resolve, reject) => {
	let user, product

	validateReview({rating, comment})
	.then(() => {
		return model.users.findOne({where: {uuid: userUID}})
	}, err => {
		throw err
	})
	.then(result => {
		if(result) {
			user = result
			return model.products.findOne({where: {uuid: productUID}})
		}
		else {
			throw 'not found user'
		}
	}, err => {
		throw err
	})
	.then(result => {
		if(result) {
			product = result
			return model.reviews.create({
				product_id: product.id, 
				user_id: user.id, 
				rating: rating, 
				comment: comment, 
			})
		}
		else {
			throw 'not found product'
		}
	}, err => {
		throw err
	})
	.then(created => {
		resolve(created)
	}, err => {
		reject(err)
	})
})