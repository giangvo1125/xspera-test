import _ from 'lodash'
import product from './route.product'
import user from './route.user'
import brand from './route.brand'

module.exports = function(app) {
	var routes = {}
	_.extend(routes, product(app))
	_.extend(routes, user(app))
	_.extend(routes, brand(app))
	return routes
}