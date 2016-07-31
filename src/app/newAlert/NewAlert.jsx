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
			"title": "",  
			"description": "",
			"location" : [1, 2],
			"location_range" : 20,
			"wind_speed": [1, 20],
			"wind_direction": [60, 80],
			"rain": [6, 9],
			"temp": [1, 20],
			"cloud": [8, 10],
			"swell_direction": [10, 342],
			"swell_period": [6, 32],
			"tide": [1, 4]
		};
	},

	componentDidMount() {
		this.props.getLocation();
	},	

	handleSend() {

		if (
			!this.state.title.length ||
			!this.state.description.length
		) {
			return;
		}

		let onComplete = this.props.router.push(`/alerts/`);

		this.props.postNewAlerts(this.state)
			.then(onComplete, onComplete);
	},

	handleDataSet(type, value, changeValue) {

		if (!value) {
			value = changeValue;
		}

		let set = {};
		set[type] = value ;
		this.setState(set);
	},

	render() {

		let p = _.partial;
		const actionMap = {
			'title': p(this.handleDataSet, 'title', null),
			'description': p(this.handleDataSet, 'description', null),
			"location" : p(this.handleDataSet, 'location'),
			"location_range" : p(this.handleDataSet, 'location_range'),
			"wind_speed": p(this.handleDataSet, 'wind_speed'),
			"wind_direction": p(this.handleDataSet, 'wind_direction'),
			"rain": p(this.handleDataSet, 'rain'),
			"temp": p(this.handleDataSet, 'temp'),
			"cloud": p(this.handleDataSet, 'cloud'),
			"swell_direction": p(this.handleDataSet, 'swell_direction'),
			"swell_period": p(this.handleDataSet, 'swell_period'),
			"tide": p(this.handleDataSet, 'tide')
		}

		return <div>
					<div className="newAlert form dialog">
						<div className="dialog__header">
							<div className="dialog__header--left">
								<Link to={'/alerts'} className="button__close dark">X</Link>
							</div>
						</div>
						<div className="dialog__body">

							<TextInput placeholder='New Alert Title' type="large" onChange={actionMap.title} />

							<TextInput placeholder='Description of the alert' type="small" onChange={actionMap['description']} />

							<div className="form__row first">
								<div className="form__row--label">
									<label>Location</label>
								</div>
								<div className="form__row--value">
									<TextInput placeholder='beach name' type="small" />
								</div>
							</div>

							<div className="form__row">
								<div className="form__row--label">
									<label>Range</label>
								</div>
								<div className="form__row--value">
									<TextInput placeholder='km' type="small" />
								</div>
							</div>

							<div className="form__row">
								<div className="form__row--label">
									<label>Wind Speed</label>
								</div>
								<div className="form__row--value">
									<TextInput placeholder='knots' type="small" />
								</div>
							</div>

							<div className="form__row">
								<div className="form__row--label">
									<label>Wind Direction</label>
								</div>
								<div className="form__row--value">
									<TextInput placeholder='degrees' type="small" />
								</div>
							</div>
						
							<div className="form__row">
								<div className="form__row--label">
									<label>Rain</label>
								</div>
								<div className="form__row--value">
									<TextInput placeholder='mm' type="small" />
								</div>
							</div>

							<div className="form__row">
								<div className="form__row--label">
									<label>Temp</label>
								</div>
								<div className="form__row--value">
									<TextInput placeholder='celcius' type="small" />
								</div>
							</div>

							<div className="form__row">
								<div className="form__row--label">
									<label>Cloud</label>
								</div>
								<div className="form__row--value">
									<TextInput placeholder='Rating' type="small" />
								</div>
							</div>

							<div className="form__row">
								<div className="form__row--label">
									<label>Swell Direction</label>
								</div>
								<div className="form__row--value">
									<TextInput placeholder='degree' type="small" />
								</div>
							</div>

							<div className="form__row">
								<div className="form__row--label">
									<label>Swell Period</label>
								</div>
								<div className="form__row--value">
									<TextInput placeholder='minutes' type="small" />
								</div>
							</div>

							<div className="form__row last">
								<div className="form__row--label">
									<label>Tide</label>
								</div>
								<div className="form__row--value">
									<TextInput placeholder='feet' type="small" />
								</div>
							</div>	

							<button type="submit" className="button__submit" onClick={this.handleSend}>Create New Alert</button>								

						</div>
					</div>					
				</div>

	}

})));
