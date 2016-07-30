import { find, where, pluck } from 'helper/mori';
import { selectData, fetch, insert, setResponse } from 'store/data';

/*----------------------------------------------------------
Actions
----------------------------------------------------------*/

export function loadDiscoverAlarms() {
	return function(dispatch, getState) {
		return new Promise((resolve, reject) => {
			
			if (navigator.geolocation) {
				
				navigator.geolocation.getCurrentPosition(res => {
					
					let { latitude, longitude } = res.coords;
					return dispatch(fetch('location', { lat: latitude, long: longitude }))
						.then(resolve, reject);
				
				}, err => {
					alert('error loading geoloaction')
					reject();
				});
			
			} else {
				alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
				reject();
			}
		});
	}
}