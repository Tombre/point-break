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
			"title": "Test",  
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
			"tide": [4, 16]
		}, settings)

		var request = dispatch(insert('alarm', toDispatch));
		return request;
	}
}