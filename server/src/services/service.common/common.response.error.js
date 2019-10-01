export default (res, err) => {
	let errObj = {
		msg: typeof err === 'string' ? err : 'error'
	}
	res.status(400).send(errObj)
}