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
				reject('not_found_brand')
			}
			
		}, err => {
			reject('server_error')
		})
	}
	else {
		reject('not_found_id')
	}
	
})