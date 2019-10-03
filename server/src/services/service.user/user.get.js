import model from '../../models'

export default ({email}, type = 'Customer') => new Promise((resolve, reject) => {
	let findUser
	model.users.findOne({
		where: {email}
	})
	.then(user => {
		if(user) {
			findUser = user
			return model.user_type.findOne({
				where: {id: user.type_id}
			})
		}
		else {
			return model.user_type.findOne({
				where: {name: type}
			})
		}
	}, err => {
		throw err
	})
	.then(user_type => {
		if(user_type) {
			if(!findUser) {
				return model.users.create({
					username: email, 
					email: email, 
					type_id: user_type.id, 
				})
			}
			else {
				return findUser
			}
		}
		else {
			throw 'not found user type'
		}
	}, err => {
		throw err
	})
	.then(result => {
		resolve(result)
	}, err => {
		reject(err)
	})
})