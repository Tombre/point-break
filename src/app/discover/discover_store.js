import { find, where, pluck } from 'helper/mori';
import { selectData, fetch, insert, setResponse } from 'store/data';
import { getLocation } from 'app/app';

/*----------------------------------------------------------
Actions
----------------------------------------------------------*/

export function loadDiscoverAlarms() {
	return function(dispatch, getState) {
		return dispatch(getLocation())
			.then(location => {
				let {latitude, longitude} = location;
				return dispatch(fetch('location', { lat: latitude, long: longitude }))
			})
	}
}