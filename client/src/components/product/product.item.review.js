import React, { Component } from 'react'
import { connect } from 'react-redux'

import RatingStarComponent from '../common/rating.star'

class ProductItemReviewComponent extends Component {
	constructor(props, context) {
		super(props)
        context.router
        this.state = {
        	view_full: false, 
        }
	}

	onViewFullReview() {
		if(!this.state.view_full) {
			this.setState({
				view_full: true, 
			})
		}
	}

	render() {
		let {data, showDefaultComment, ratingMax, language} = this.props, 
			{view_full} = this.state, 
			active = data && data.size > 0 ? 'active' : '', 
			elem = []

		for(var i = 0; i < data.size; i++) {
			if(i === showDefaultComment && !view_full) {
				break
			}
			else {
				var item = data.get(i)
				elem.push(
					<div className="review-item" key={item.get('uuid')}>
						<RatingStarComponent
							keyProps={item.get('uuid')} 
							limit={ratingMax}
							rating={item.get('rating')}
						/>
						<div className="username">{item.getIn(['user', 'username'])}</div>
						<div className="comment">{item.get('comment')}</div>
					</div>
				)
			}
		}
		
		return (
			<form className={`form-review ${active}`}>
				<div className="review-list">
					{elem}
					{
						elem.length < data.size ? 
						<div>
							<a className="viewmore" onClick={this.onViewFullReview.bind(this)}>
								{language.get('view_more_review')}
							</a>
						</div> :
						''
					}
				</div>
				
				
			</form>
		)
	}
}

ProductItemReviewComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = state => {
	return {
		showDefaultComment: selectors.productDefaultCommentSelector(state), 
		ratingMax: selectors.productRatingMaxSelector(state), 
		language: selectors.languageSelector(state).get('product'), 
	}
}

export default connect(mapStateToProps)(ProductItemReviewComponent)
