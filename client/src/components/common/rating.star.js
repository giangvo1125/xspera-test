import React, { Component } from 'react'

class RatingStarComponent extends Component {
	constructor(props, context) {
		super(props)        
	}

	render() {
		let { rating, limit, keyProps } = this.props,
			elem = []

		for(var i = 0; i < limit; i++) {
			var active = i >= rating ? '' : 'active'
			elem.push(
				<li 
					key={`rating-star-${keyProps}-${i}`} 
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
