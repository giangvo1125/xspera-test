import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoadingComponent extends Component {
	constructor(props, context) {
		super(props)        
	}
	
	render() {
		let {loading} = this.props
		return (
			<div>
				{
					loading ? 
					<div className="loading">
						<div className="loading__dimmer"></div>
						<div className="loading__content">
							<div className="spinner">
								<i className="fa fa-spin fa-refresh"></i>
							</div>
						</div>
					</div> : ''
				}
			</div>
		)
		
	}
}

const mapStateToProps = state => {
	return {
		loading: selectors.loadingSelector(state), 
	}
}

export default connect(mapStateToProps)(LoadingComponent)
