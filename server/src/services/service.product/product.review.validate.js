export default ({rating, comment}) => new Promise((resolve, reject) => {
	if(!rating || !comment) {
		reject('require params review')
	}
	else {
		switch(true) {
			case !Number.isInteger(rating):
				reject('rating_must_be_integer')
			break
			case rating < 0 || rating > 10:
				reject('rating_must_be_between_0_to_10')
			break
			case typeof comment != 'string':
				reject('comment_must_be_string')
			break
			default:
				resolve()
			break

		}
	}
})