import model from '../../models'

export default (condition = {}) => new Promise((resolve, reject) => {
	if(condition) {
		model.brands.findOne({
			where: condition, 
		})
		.then(brand => {
			if(brand) {
				resolve(brand)
			}
			else {
				reject('not found brand')
			}
			
		}, err => {
			reject(err)
		})
	}
	else {
		reject('not found id')
	}
	
})