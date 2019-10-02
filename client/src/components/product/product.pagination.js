import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import PaginationComponent from '../common/pagination'
import {updateProductPagination, getProduct} from '../../actions/action.product'

class ProductPaginationComponent extends Component {
	constructor(props, context) {
		super(props)
	}
	onClickPagination(pageNumber) {
		this.props.updateProductPagination(pageNumber)
		.then(() => {
			this.props.getProduct()
		})
	}
	render() {
		let {pagination} = this.props

		return (
			<PaginationComponent 
				id={'product-list'} 
				pagination={pagination} 
				onClick={this.onClickPagination.bind(this)}
			/>
		)
	}
}

const mapStateToProps = state => {
	return {
		pagination: selectors.productPaginationSelector(state), 
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ 
	updateProductPagination,  
	getProduct, 
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductPaginationComponent)