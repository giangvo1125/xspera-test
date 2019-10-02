import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProductItemReviewComponent from './product.item.review'
import RatingStarComponent from '../common/rating.star'

class ProductItemComponent extends Component {
	constructor(props, context) {
		super(props)
        context.router
	}

	render() {
		let {data, ratingMax, language} = this.props

		return (
			<div className="product">
				<div className="product__content">
					<div className="brand">{data.getIn(['brand', 'name'])}</div>
					<div className="name">{data.get('name')}</div>
					<div className="flex">
						<RatingStarComponent
							keyProps={data.get('uuid')} 
							limit={ratingMax}
							rating={data.get('rating')}
						/>
					</div>
					<div className="desc">{data.get('description')}</div>
					<a className="review">{language.get('add_review')}</a>
					<ProductItemReviewComponent 
						data={data.get('reviews')}
					/>
				</div>
			</div>
		)
	}
}

ProductItemComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = state => {
	return {
		ratingMax: selectors.productRatingMaxSelector(state), 
		language: selectors.languageSelector(state).get('product'), 
	}
}

export default connect(mapStateToProps)(ProductItemComponent)