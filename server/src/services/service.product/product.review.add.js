import model from '../../models'
import validateReview from './product.review.validate'

const sequelize = model.sequelize

export default ({productUID, userUID, rating, comment}) => new Promise((resolve, reject) => {
	let user, product

	sequelize.transaction({autocommit: false})
	.then(t => {
		validateReview({rating, comment})
		.then(() => {
			return model.users.findOne({where: {uuid: userUID}, transaction: t})
		}, err => {
			throw err
		})
		.then(result => {
			if(result) {
				user = result
				return model.products.findOne({where: {uuid: productUID}, transaction: t})
			}
			else {
				throw 'not_found_user'
			}
		}, err => {
			throw err
		})
		.then(result => {
			if(result) {
				product = result
				return product.getReviews({transaction: t})
			}
			else {
				throw 'not_found_product'
			}
		}, err => {
			throw err
		})
		.then(reviews => {
			var totalRating = 0, averageRating = 0
			for(var i = 0; i < reviews.length; i++) {
				totalRating+=reviews[i].rating
			}
			totalRating+= rating
			averageRating = Math.round(totalRating/(reviews.length + 1))
			return product.update({rating: averageRating}, {transaction: t})
		}, err => {
			throw err
		})
		.then(updated => {
			return model.reviews.create({
				product_id: product.id, 
				user_id: user.id, 
				rating: rating, 
				comment: comment, 
			}, {transaction: t})
		}, err => {
			throw err
		})
		.then(created => {
			t.commit()
			resolve(created)
		}, err => {
			t.rollback()
			reject(err)
		})
	})
})