import { find, where, pluck } from 'helper/mori';
import { selectData, fetch, insert, setResponse } from 'store/data';

/*----------------------------------------------------------
Actions
----------------------------------------------------------*/

export function loadDiscoverAlarms() {
	return function(dispatch, getState) {
		return dispatch(fetch('alarm'));
	}
}