import { find, where, pluck } from 'helper/mori';
import _ from 'lodash';
import { selectData, fetch, insert, setResponse } from 'store/data';

export function loadMyFeed() {
	return function(dispatch, getState) {
		return dispatch(fetch('feed'));
	}
}