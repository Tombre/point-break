import React from 'react';
import { Link } from 'react-router';

import TextInput from 'app/common/inputs/TextInput';
import SelectInput from 'app/common/inputs/SelectInput';

export default React.createClass({
	
	propTypes: {
		
	},

	render() {
		return <div className="newAlert form dialog">
				<div className="dialog__header">
					<div className="dialog__header--left">
						<Link to={'/alerts'} className="button__close dark">X</Link>
					</div>
				</div>
				<div className="dialog__body">

					<TextInput placeholder='New Alert Title' type="large" />

					<TextInput placeholder='Description of the alert' type="small" />

					<div className="form__row">
						<div className="form__row--label">
							<label>Location</label>
						</div>
						<div className="form__row--value">
							<AlertLocation distance={["1km","2km","5km","10km","20km"]} />
						</div>
					</div>

					<div className="form__row">
						<div className="form__row--label">
							<label>Skill Level</label>
						</div>
						<div className="form__row--value">	
							<AlertSkill options={["Beginner"]} />
						</div>
					</div>

					<AlertConditions options={['Custom Conditions', 'Like Past Conditions', 'Current Conditions']} />

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

				</div>
			</div>
	}

});