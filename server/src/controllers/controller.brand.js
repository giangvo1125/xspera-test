import model from '../models'
import {brand as brandService, common} from '../services'

const createBrand = (req, res, next) => {
	var data = req.body
	brandService.createBrand(data)
	.then(result => {
		res.status(200).send({msg: 'create successfully'})
	}, err => {
		common.errorRes(res, err)
	})
}

module.exports = {
	createBrand, 
}