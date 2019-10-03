import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ReviewFormComponent from './review.form'
import {checkProductReview, resetDataReview} from '../../actions/action.review'

class ReviewComponent extends Component {
	constructor(props, context) {
		super(props)
        context.router
	}
	componentDidMount() {
		this.props.checkProductReview()
	}
	componentWillUnmount() {
		this.props.resetDataReview()
	}
	render() {
		
		return (
			<div className="container">
				<h1>Review</h1>
				<ReviewFormComponent/>
			</div>	
		)
	}
}

ReviewComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = state => {
	return {
		language: selectors.languageSelector(state).getIn(['product', 'review']), 
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ 
	checkProductReview, 
	resetDataReview, 
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ReviewComponent)