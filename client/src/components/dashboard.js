import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getProduct } from '../actions/action.product'

class DashboardComponent extends Component {
	constructor(props, context) {
		super(props)
        context.router
	}
	componentDidMount() {
		this.props.getProduct()
	}
	render() {
		return (
			<div>
				hello
			</div>
		)
	}
}

DashboardComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => bindActionCreators({ 
	getProduct,  
}, dispatch)

export default connect(null, mapDispatchToProps)(DashboardComponent)