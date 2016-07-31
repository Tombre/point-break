import React from 'react';
import HorizontalSelectList from 'app/common/inputs/HorizontalSelectList';

/*----------------------------------------------------------
Component
----------------------------------------------------------*/

export default React.createClass({
	
	render() {
		return (
			<div className="form__row centered">
				<div className="form__row--label">
					<label>Alert me if:</label>
				</div>
				<div className="form__row--value">
					<HorizontalSelectList 
						className="conditions" 
						options={['Custom Conditions', 'Like Past Conditions', 'Current Conditions']} 
						default="Current Conditions" />
				</div>
			</div>
		);
	}

});