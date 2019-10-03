import { user } from '../controllers'

module.exports = app => {
	//route get user by condition
    app.get('/api/user', user.getUser)
}