import _ from 'lodash'
import product from './route.product'

module.exports = function(app) {
	var routes = {}
	_.extend(routes, product(app))
	return routes
}