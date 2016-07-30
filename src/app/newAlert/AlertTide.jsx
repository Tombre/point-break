import React from 'react';

/*----------------------------------------------------------
Component
----------------------------------------------------------*/

export default React.createClass({
	propTypes: {
		distance: React.PropTypes.array
	},
	render() {
		return (
			<div className="form-input">
				<div className="form-input__row">
					<label>Location</label>
					<TextInput placeholder="Enter name of beach" type="small" />
				</div>
				<div className="form-input__row">
					<label>Distance</label>
					<SelectInput className="distance" options={this.props.distance} />
				</div>
			</div>
		);
	}

});