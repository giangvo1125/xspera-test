import { user } from '../controllers'

module.exports = app => {
    app.get('/api/user', user.getUser)
}