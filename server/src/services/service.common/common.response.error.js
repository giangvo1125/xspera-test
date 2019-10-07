import commonErrorObj from './common.response.error.code'

export default (res, err) => {
	let errCode = typeof err === 'string' ? err : 'server_error',
		errObj = commonErrorObj[errCode] && typeof commonErrorObj[errCode] === 'object' ? 
					commonErrorObj[errCode] : commonErrorObj['server_error']
	res.status(errObj.code).send(errObj.err)
}