import { product } from '../controllers'

module.exports = app => {
	//route get product by condition
    app.get('/api/product', product.getProduct)
    //route create product
    app.post('/api/product', product.createProduct)
    //route add review to product
    app.post('/api/product/review', product.addReview)
}