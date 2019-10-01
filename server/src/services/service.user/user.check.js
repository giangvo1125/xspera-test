import model from '../../models'

export default (uuid = '', type = '') => new Promise((resolve, reject) => {
	if(uuid) {
		model.users.findOne({
			where: { uuid },
			include: [
				{model: model.user_type, required: true}, 
			], 
		})
		.then(user => {
			if(user) {
				if(type) {
					let {user_type: {name}} = user
					if(name == type) {
						resolve(user)
					}
					else {
						reject('not match type user')
					}
				}
				else {
					resolve(user)
				}
			}
			else {
				reject('not found user')
			}
			
		}, err => {
			reject(err)
		})
	}
	else {
		reject('not found id')
	}
	
})