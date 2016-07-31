import React from 'react';

export default React.createClass({

	propTypes: {
		options: React.PropTypes.array,
		className: React.PropTypes.string
	},

	getInitialState() {
		return {
			value : this.props.value || "",
			index: 'second'
		};
	},
	
	handleOnClick : function(e, index) {
		var value = e.target.value;
		this.setState({ value });
		console.log(e.target, index);
	},

	render() {
		var self = this;

		return  <ul className={`horizontal-select ` + this.props.className + ' ' + this.state.index}>
				{this.props.options.map(function(choice, i){
					return <li key={ i }>
						   		<label>
						   			<input  type="radio" 
						   					name={self.props.className} 
						   					onClick={ self.handleOnClick } 
						   					value={ choice } />
						   			{ choice }
						   		</label>
					   		</li>;
				})}
				</ul>;
		
	}

});