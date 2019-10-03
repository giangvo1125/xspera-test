import { brand } from '../controllers'

module.exports = app => {
	//route create brand
    app.post('/api/brand', brand.createBrand)
}