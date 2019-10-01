import { product } from '../controllers'

module.exports = app => {
    app.get('/api/product', product.getProduct)
    app.post('/api/product/review', product.addReview)
}