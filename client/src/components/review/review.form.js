import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import InputComponent from '../common/input'
import RatingStarComponent from '../common/rating.star'

import {updateDataReview, onSaveReview} from '../../actions/action.review'

class ReviewFormComponent extends Component {
	constructor(props, context) {
		super(props)
        context.router
        this.state = {
        	fields: {
        		productName: {
		            readonly: true, 
		            label: 'product_name', 
		            placeholder: 'product_name_placeholder', 
		            valid: true, 
		        }, 
		        email: {
		            readonly: false, 
		            label: 'email', 
		            placeholder: 'email_placeholder', 
		            valid: true, 
		            regex: Helper.regexEmail, 
		            err_msg: 'email_err', 
		        }, 
		        comment: {
		            readonly: false, 
		            label: 'comment', 
		            placeholder: 'comment_placeholder', 
		            valid: true, 
		            err_msg: 'comment_err', 
		            regex: /^[A-Za-z0-9\s]+$/, 
		        }, 
        	}
        }
	}
	onChangeValue(key, value) {
		let {fields} = this.state,
			field = fields[key]
		if(field) {
			this.onUpdateValue(key, value)
			if(field.regex) {
				if(!field.regex.test(value)) {
					fields[key].valid = false
					this.setState({fields})
				}
				else {
					if(!field.valid) {
						fields[key].valid = true
						this.setState({fields})
					}
				}
			}
		}
	}
	onUpdateValue(key, value) {
		this.props.updateDataReview(key, value)
	}
	onClickRating(key, position) {
		this.onUpdateValue(key, position)
	}
	onCancel() {
		this.context.router.push('/')
	}
	onSave() {
		let {fields} = this.state, 
			{msgLanguage} = this.props, 
			valid = true
		for(let key in fields) {
			if(!fields[key].valid) {
				valid = false
			}
		}
		if(!valid) {
			toastr.error(msgLanguage.get('required'))
		}
		else {
			this.props.onSaveReview()
			.then(() => {
				toastr.success(msgLanguage.get('create_success'))
				this.context.router.push('/')
			}, err => {
				let message = ['error'].indexOf(err) == -1 ? err : msgLanguage.get(err)
				toastr.error(message)
			})
		}
	}
	render() {
		let {data,language, ratingMax, msgLanguage} = this.props, 
			{fields} = this.state, 		
			inputs = []

		for(let key in fields) {
			var field = fields[key]
			inputs.push(
				<InputComponent 
					key={key} 
					readonly={field.readonly} 
					label={language.get(field.label)} 
					value={data.get(key)} 
					keyProps={key} 
					placeholder={language.get(field.placeholder)} 
					onChange={this.onChangeValue.bind(this)} 
					valid={field.valid} 
					err_msg={msgLanguage.get(field.err_msg)}
				/>
			)
		}
		return (
			<form className="form-add">
				{inputs}
				<div className="form-group">
					<label className="control-label">{language.get('rating')}</label>
					<div className="flex">
						<RatingStarComponent
							keyProps={data.get('productId')} 
							limit={ratingMax}
							rating={data.get('rating')} 
							onClick={this.onClickRating.bind(this, 'rating')}
						/>
					</div>
				</div>
				<div className="flex flex-end">
					<a className="btn btn--cancel" onClick={this.onCancel.bind(this)}>
						{language.get('cancel')}
					</a>
					<a className="btn btn--submit" onClick={this.onSave.bind(this)}>
						{language.get('save')}
					</a>
				</div>
				
			</form>
		)
	}
}

ReviewFormComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = state => {
	return {
		language: selectors.languageSelector(state).getIn(['product', 'review']), 
		msgLanguage: selectors.languageSelector(state).get('msg'), 
		data: selectors.reviewDataSelector(state), 
		ratingMax: selectors.ratingMaxSelector(state), 
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({ 
	updateDataReview, 
	onSaveReview, 
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ReviewFormComponent)
