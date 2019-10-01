import { product } from '../controllers'

module.exports = (app) => {
    app.get('/api/product', product.get)
}