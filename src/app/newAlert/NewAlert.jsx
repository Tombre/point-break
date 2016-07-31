import React from 'react';
import { Link } from 'react-router';

import TextInput from 'app/common/inputs/TextInput';
import SelectInput from 'app/common/inputs/SelectInput';
import { getLocation } from 'app/app';
import connect from 'store/connect';
import { postNewAlerts } from 'app/alerts/alerts_store';
import { withRouter } from 'react-router';

export default withRouter(connect(null, { getLocation, postNewAlerts })(React.createClass({
	
	propTypes: {
		getLocation: React.PropTypes.func,
		router: React.PropTypes.object
	},

	getInitialState() {
		return {
			"title": "Fishing",  
			"description": "",
			"location" : [1, 2],
			"location_range" : 50,
			"wind_speed": 60,
			"wind_direction": 60,
			"rain": 9,
			"temp": 20,
			"cloud": 8,
			"swell_direction": 342,
			"swell_period": 32,
			"tide": 16
		};
	},

	componentDidMount() {
		this.props.getLocation();
	},	

	handleSend() {

		let onComplete = this.props.router.push(`/alerts/`);

		this.props.postNewAlerts()
			.then(onComplete, onComplete);
	},

	render() {
		return <div className="newAlert">
			
			<Link className="newAlert__close button__close" to={'/alerts'}>Close</Link>

			<TextInput placeholder='Title' type="large" />
			<TextInput placeholder='Description of alert' />

			<div className="inputList">
				
				<div className="inputList__item">
					<label className="inputList__item__label">Location</label>
					
				</div>
				
				<div className="inputList__item">
					<label className="inputList__item__label">Skill Level</label>
					<SelectInput className="inputList__item__input" options={['Surfing', 'Fishing']} />
				</div>

				<button onClick={this.handleSend}>Submit stuff</button> 

			</div>

		</div>
	}

})));