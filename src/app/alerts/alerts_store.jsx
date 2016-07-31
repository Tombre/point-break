import { find, where, pluck } from 'helper/mori';
import _ from 'lodash';
import { selectData, fetch, insert, setResponse } from 'store/data';

/*----------------------------------------------------------
Actions
----------------------------------------------------------*/

export function loadMyAlerts() {
	return function(dispatch, getState) {
		return dispatch(fetch('alarm'));
	}
}

export function postNewAlerts(settings) {
	return function(dispatch, getState) {

		let toDispatch = _.assign({
			"title": "Knarly Trigg",  
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
		}, settings)

		var request = dispatch(insert('alarm', toDispatch));
		return request;
	}
}