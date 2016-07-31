import React from 'react';
import { Link } from 'react-router';

import TextInput from 'app/common/inputs/TextInput';
import SelectInput from 'app/common/inputs/SelectInput';

export default React.createClass({
	
	propTypes: {
		
	},

	render() {
		return <div className="newAlert">
			
			<Link className="main-menu__close button__close" to={'/alerts'}>Close</Link>

			<TextInput placeholder='New Alert Title' type="large" />

			<div className="inputList">
				<div className="inputList__item">
					<label className="inputList__item__label">Activity</label>
					<SelectInput className="inputList__item__input" options={['Surfing', 'Fishing']} />
				</div>
				<div className="inputList__item">
					<label className="inputList__item__label">Activity</label>
					<SelectInput className="inputList__item__input" options={['Surfing', 'Fishing']} />
				</div>
			</div>

		</div>
	}

});