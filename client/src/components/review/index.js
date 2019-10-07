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
		.then(() => {

		}, err => {
			let {msgLanguage} = this.props, 
				message = ['error', 'not_found_product'].indexOf(err) == -1 ? err : msgLanguage.get(err)
			toastr.error(message)
		})
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
		msgLanguage: selectors.languageSelector(state).get('msg'), 
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ 
	checkProductReview, 
	resetDataReview, 
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ReviewComponent)