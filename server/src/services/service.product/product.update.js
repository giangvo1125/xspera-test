import model from '../../models'

export default (data, condition = {}) => new Promise((resolve, reject) => {
	model.products.update(data, {where: condition})
	.then(product => {
		resolve(product)
	}, err => {
		reject(err)
	})
})