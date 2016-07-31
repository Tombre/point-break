import React from 'react';

export default React.createClass({

	propTypes: {
		type: React.PropTypes.string,
		placeholder: React.PropTypes.string,
		value: React.PropTypes.string,
		onChange: React.PropTypes.func
	},

	getInitialState : function() {
		return {
			value : this.props.value || ""
		};
	},

	handleOnChange(e) {
		let value = e.target.value;
		this.setState({ value });
		if (this.props.onChange) {
			this.props.onChange(value);
		}
	},

	render() {
		let className;
		
		switch(this.props.type) {
			case 'large':
				className = 'input__largeText';
				break;
			case 'normal':
				className = 'input__text';
				break;
			default:
				className = 'input__text';
		}

		return <input type="text" onChange={ this.handleOnChange } className={className} value={this.state.value} placeholder={this.props.placeholder} />
	}

});