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
		return <ReactSlider defaultValue={[1, 7] min={1} max={7} step={1}} withBars />
	}

});