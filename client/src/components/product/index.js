import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ProductItemComponent from './product.item'

class ProductComponent extends Component {
	constructor(props, context) {
		super(props)
        context.router
	}

	render() {
		let {list} = this.props, 
			elem = list.map(item => {
				let key = item.get('uuid')
				return (
					<ProductItemComponent key={key} data={item}/>
				)
			})

		return (
			<div className="products">
				{elem}
			</div>
		)
	}
}

ProductComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = state => {
	return {
		list: selectors.productDataSelector(state), 
	}
}

export default connect(mapStateToProps)(ProductComponent)