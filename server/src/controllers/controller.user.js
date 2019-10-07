import model from '../models'
import {user as userService, common} from '../services'

//function get user by email, if not have the system will create base email
const getUser = (req, res, next) => {
	let {email} = req.query
	userService.getUser({email}, 'Customer')
	.then(result => {
		res.status(200).send({uid: result.uuid})
	}, err => {
		next(err)
	})
}

module.exports = {
	getUser, 
}