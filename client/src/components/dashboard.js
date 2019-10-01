import React, { Component } from 'react'

class DashboardComponent extends Component {
	constructor(props, context) {
		super(props)
        context.router
	}
	componentDidMount() {
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
};

export default DashboardComponent