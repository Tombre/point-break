import React from 'react';
import TextInput from 'app/common/inputs/TextInput';
import SelectInput from 'app/common/inputs/SelectInput';

/*----------------------------------------------------------
Component
----------------------------------------------------------*/

export default React.createClass({
	propTypes: {
		distance: React.PropTypes.array
	},
	render() {
		return (
			<div className="form__row">
				<div className="form__row--label">
					<label>Swell</label>
				</div>
				<div className="form__row--value">
					<AlertSwell min="1" max="7" />
				</div>
			</div>

			<div className="form__row">
				<div className="form__row--label">
					<label>Tide</label>
				</div>
				<div className="form__row--value">
					<AlertTide />
				</div>
			</div>

			<div className="form__row">
				<div className="form__row--label">
					<label>Wind Direction</label>
				</div>
				<div className="form__row--value">
					<AlertWind />
				</div>
			</div>
		);
	}

});
