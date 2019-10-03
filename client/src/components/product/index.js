import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ProductItemComponent from './product.item'

import {resetDataProduct} from '../../actions/action.product'

class ProductComponent extends Component {
	constructor(props, context) {
		super(props)
        context.router
	}
	componentWillUnmount() {
		this.props.resetDataProduct()
	}

	render() {
		let {list, language} = this.props, 
			elem = list.map(item => {
				let key = item.get('uuid')
				return (
					<ProductItemComponent key={key} data={item}/>
				)
			})

		return (
			<div className="products">
				{
					elem && elem.size > 0 ? 
					elem : 
					<div className="no-product">{language.get('not_found')}</div>
				}
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
		language: selectors.languageSelector(state).get('product'), 
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ 
	resetDataProduct, 
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductComponent)