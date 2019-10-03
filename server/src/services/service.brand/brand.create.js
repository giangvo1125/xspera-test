import model from '../../models'

export default (body = {}, transaction) => new Promise((resolve, reject) => {
	if(body) {
		let {name} = body
		if(!name) {
			reject('not found params')
		}
		else {
			let options = {}
			if(transaction) {
				options.transaction = transaction
			}
			model.brands.findOne({
				where: {name}
			})
			.then(brand => {
				if(brand) {
					throw 'brand existed'
				}
				else {
					return model.brands.create(body, options)
				}
			}, err => {
				throw err
			})
			.then(brand => {
				resolve(brand)
			}, err => {
				reject(err)
			})
		}
	}
	else {
		reject('not found params')
	}
	
})