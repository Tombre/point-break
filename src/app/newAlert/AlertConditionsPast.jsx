import React from 'react';
import DateInput from 'app/common/inputs/DateInput';
import TimeInput from 'app/common/inputs/TimeInput';

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
					<label>Date</label>
				</div>
				<div className="form__row--value">
					<DateInput />
				</div>
			</div>

			<div className="form__row">
				<div className="form__row--label">
					<label>Time</label>
				</div>
				<div className="form__row--value">
					<TimeInput />
				</div>
			</div>

		);
	}

});
