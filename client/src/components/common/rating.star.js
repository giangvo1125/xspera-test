import React, { Component } from 'react'

class RatingStarComponent extends Component {
	constructor(props, context) {
		super(props)        
	}
	onClickRating(position) {
		let {onClick} = this.props
		if(onClick && typeof onClick === 'function') {
			onClick(position + 1)
		}
	}
	render() {
		let {rating, limit, keyProps} = this.props,
			elem = []

		for(var i = 0; i < limit; i++) {
			var active = i >= rating ? '' : 'active'
			elem.push(
				<li 
					key={`rating-star-${keyProps}-${i}`} 
					onClick={this.onClickRating.bind(this, i)}
					className={`star ${active}`}>★</li>
			)
		}

		return (
			<ul className="rating">
				{elem}
			</ul>
		)
		
	}
}

export default RatingStarComponent
