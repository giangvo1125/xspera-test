import React, { Component } from 'react'

class InputComponent extends Component {
	constructor(props, context) {
		super(props)        
	}
	shouldComponentUpdate(nextProps) {
		let preProps = this.props
		return JSON.stringify(nextProps) != JSON.stringify(preProps)
	}
	onChange(keyProps, e) {
		let {value} = e.target,
			{onChange} = this.props
		if(onChange && typeof onChange === 'function') {
			onChange(keyProps, value)
		}

	}
	render() {
		let {label, valid, placeholder, readonly, value, keyProps, err_msg} = this.props

		return (
			<div className={`form-group ${valid == false ? 'has-error' : ''}`}>
				<label className="control-label">{label || ''}</label>
				<div className="input">
					<input 
						type="text" 
						className="form-control" 
						placeholder={placeholder || ''} 
						readOnly={readonly || false} 
						value={value || ''}
						onChange={this.onChange.bind(this, keyProps)}/>
				</div>
				{
					valid == false ? 
					<div className="help-block">{err_msg}</div> : 
					''
				}
			</div>
		)
		
	}
}

export default InputComponent
