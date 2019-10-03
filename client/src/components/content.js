import React, { Component } from 'react'

import LoadingComponent from './common/loading'

class ContentComponent extends Component {
	constructor(props, context) {
		super(props)
        context.router
	}
	componentDidMount() {
	}
	render() {
		return (
			<div>
				<LoadingComponent/>
				{this.props.children}
			</div>
		)
	}
}

ContentComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default ContentComponent