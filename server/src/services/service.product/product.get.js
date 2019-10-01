import model from '../../models'

export default (condition = {}) => new Promise((resolve, reject) => {
	model.products.findAndCountAll(condition)
	.then(products => {
		resolve(products)
	}, err => {
		reject(err)
	})
})