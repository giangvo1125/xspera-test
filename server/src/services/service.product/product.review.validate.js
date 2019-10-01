export default ({rating, comment}) => new Promise((resolve, reject) => {
	if(!rating || !comment) {
		reject('require params review')
	}
	else {
		switch(true) {
			case !Number.isInteger(rating):
				reject('rating must be integer')
			break
			case rating < 0 || rating > 10:
				reject('rating must be between 0 to 10')
			break
			case typeof comment != 'string':
				reject('comment must be string')
			break
			default:
				resolve()
			break

		}
	}
})