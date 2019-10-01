import db from '../../models'
const sequelize = db.sequelize

export default (condition = {}) => new Promise((resolve, reject) => {
	db.products.findAndCountAll(condition)
	.then(products => {
		resolve(products)
	}, err => {
		reject(err)
	})
})