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

					<div className="selectField">
						<label>Location</label>
						<select>
							<option>1km near Cottesloe</option>
							<option>2km near Cottesloe</option>
							<option>5km near Cottesloe</option>
							<option>10km near Cottesloe</option>
							<option>20km near Cottesloe</option>
						</select>
					</div>

					<div className="selectField">
						<label>Skill Level</label>
						<select>
							<option>Beginner</option>
							<option>Intermidiate</option>
							<option>Advanced</option>
						</select>
					</div>

					<div className="inputList">
						<div className="inputList__item">
							<label className="inputList__item__label">Activity</label>
							<SelectInput className="inputList__item__input" options={['Surfing', 'Fishing']} />
						</div>
					</div>

					<div className="selectField">
						<label>Swell</label>
						<select>
							<option>1ft - 7ft</option>
						</select>
					</div>

				</div>
			</div>
	}

});