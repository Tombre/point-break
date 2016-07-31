import React from 'react';
import { Link } from 'react-router';

import TextInput from 'app/common/inputs/TextInput';
import SelectInput from 'app/common/inputs/SelectInput';

import AlertLocation from 'app/newAlert/AlertLocation';
import AlertSkill from 'app/newAlert/AlertSkill';
import AlertSwell from 'app/newAlert/AlertSwell';
import AlertTide from 'app/newAlert/AlertTide';
import AlertWind from 'app/newAlert/AlertWind';
import AlertConditions from 'app/newAlert/AlertConditions';


export default React.createClass({
	
	getInitialState() {
	    return {
	  		formInputVisible: false    
	    };
	},
	render() {
		return <div>
					<div className="newAlert form dialog">
						<div className="dialog__header">
							<div className="dialog__header--left">
								<Link to={'/alerts'} className="button__close dark">X</Link>
							</div>
						</div>
						<div className="dialog__body">

							<TextInput placeholder='New Alert Title' type="large" />

							<TextInput placeholder='Description of the alert' type="small" />

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

							<button type="submit" className="button__submit">Create New Alert</button>								

						</div>
					</div>					
				</div>

	}

								// <AlertConditions options={['Custom Conditions', 'Like Past Conditions', 'Current Conditions']} />					


});