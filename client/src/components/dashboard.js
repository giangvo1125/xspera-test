import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getProduct } from '../actions/action.product'

import ProductComponent from './product'
import ProductPaginationComponent from './product/product.pagination'

class DashboardComponent extends Component {
	constructor(props, context) {
		super(props)
        context.router
	}
	componentDidMount() {
		this.props.getProduct()
	}
	render() {
		let {language} = this.props

		return (
			<div className="container">
				<h1>{language.get('title')}</h1>
				<ProductComponent/>
				<ProductPaginationComponent />
			</div>	
		)
	}
}

DashboardComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = state => {
	return {
		language: selectors.languageSelector(state).get('product'), 
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ 
	getProduct,  
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent)