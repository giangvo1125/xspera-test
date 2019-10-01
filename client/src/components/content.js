import React, { Component } from 'react'

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
				{this.props.children}
			</div>
		)
	}
}

ContentComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

export default ContentComponent