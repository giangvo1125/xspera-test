import React, { Component } from 'react'

class Pagination extends Component {
	constructor(props, context) {
		super(props);
        context.router
	}
	_onCheckSideButton(side = 'left') {
		let { pagination } = this.props || {}
		if(!pagination) pagination = immutable.fromJS({})
		let startPage = pagination.get('startPage')
		let totalPages = pagination.get('totalPages')

		switch(side) {
			case 'left':
				if(startPage == 1) {
					return true
				}
			break
			case 'right':
				if(startPage == totalPages) {
					return true
				}
			default:
				return false
			break
		}
		return false
	}
	_onClickPagination(pageNumber = 1) {
		let { onClick } = this.props
		if(typeof onClick === 'function') {
			onClick(pageNumber)
		}
	}
	_onClickNextPreBtn(side) {
		let disabled = this._onCheckSideButton(side)
		if(!disabled) {
			let { pagination } = this.props || {}
			if(!pagination) pagination = immutable.fromJS({})
			let startPage = pagination.get('startPage')
			let pageNumber = side == 'left' ? (startPage - 1) : (startPage + 1)
			this._onClickPagination(pageNumber)
		}
	}
	renderView(key) {
		let { pagination } = this.props
		if(!pagination) pagination = immutable.fromJS({})
		let startPage = pagination.get('startPage'), 
			totalPages = pagination.get('totalPages'), 
			visiblePages = pagination.get('visiblePages'), 
			// pageNumber = Math.floor(totalPages/visiblePages) + (totalPages % visiblePages > 0 ? 1 : 0), 
			section = (Math.floor(totalPages/visiblePages) + (totalPages % visiblePages > 0 ? 1 : 0)) - 1, 
			elem = []
		if(!isNaN(section)) {
			let min = section * visiblePages + 1
			let max = min + visiblePages
			if(max > totalPages) max = totalPages + 1
			for(let i = min; i < max; i++) {
				elem.push(
					<li 
						key={`${key}-number-${i}`} 
						className={i === startPage ? 'active' : ''}
						onClick={this._onClickPagination.bind(this, i)}>
						<a>{i}</a>
					</li>
				)
			}
		}
		return elem
	}
	render() {
		let { pagination, id } = this.props || {}
		id = id ? id : `pagination-${Math.random()}`
		let isDisabledSideLeft = this._onCheckSideButton('left') ? 'disabled' : ''
		let isDisabledSideRight = this._onCheckSideButton('right') ? 'disabled' : ''
		
		return (
			<ul className="pagination">
				<li 
					className={isDisabledSideLeft} 
					onClick={this._onClickNextPreBtn.bind(this, 'left')}>
					<a><i className="fa fa-angle-left"></i></a>
				</li>
				{this.renderView(id)}
				<li 
					className={isDisabledSideRight}
					onClick={this._onClickNextPreBtn.bind(this, 'right')}>
					<a><i className="fa fa-angle-right"></i></a>
				</li>
			</ul>
		)
	}
}

export default Pagination
