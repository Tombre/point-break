import React from 'react';

export default React.createClass({

	propTypes: {
		options: React.PropTypes.array,
		className: React.PropTypes.string
	},

	getInitialState() {
		return {
			value : this.props.value || ""
		};
	},
	
	handleOnChange : function(e) {
		var value = e.target.value;
		this.setState({ value });
	},

	render() {
		return <select className={`input__select ` + this.props.className} onChange={ this.handleOnChange }>
			{this.props.options.map(function(choice, i){
				return <option value={ choice } key={ i }>{ choice }</option>;
			})}
		</select>;
	}

});