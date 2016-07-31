import React from 'react';
import mori from 'mori';
import Kefir from 'kefir';
import _ from 'lodash';

import connect from 'store/connect';
import { createReducer, selectPath, createSelector, selectWhere, selectWhen } from 'store/utils';
import { find, where, pluck } from 'helper/mori';
import { selectData, fetch, insert, setResponse } from 'store/data';
import { selectErrorWhen, removeError, createError } from 'store/error';

import Header from 'app/common/Header';
import Menu from 'app/common/Menu';

/*----------------------------------------------------------
Helper
----------------------------------------------------------*/



/*----------------------------------------------------------
Actions
----------------------------------------------------------*/

// Set the app state to loading
const SET_LOADING = 'APP_SET_LOADING';
export function setLoading() {
	return {
		type : SET_LOADING,
		payload : {}
	};
}

// Set the app state to loaded
const SET_LOADED = 'APP_SET_LOADED';
export function setLoaded() {
	return {
		type : SET_LOADED,
		payload : {}
	};
}

// Set the app state to loaded
const SET_LOCATION = 'APP_SET_LOCATION';
export function setLocation(lat, long) {
	return {
		type : SET_LOCATION,
		payload : { lat, long }
	};
}

const GET_LOCATION='APP_GET_LOCATION';
export function getLocation() {
	return function(dispatch, getState) {

		return new Promise((resolve, reject) => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(res => {
					console.log('he', res);
					let { latitude, longitude } = res.coords;
					dispatch(setLocation(latitude, longitude ));
					resolve({latitude, longitude });
				}, err => {
					alert('error loading geoloaction')
					reject(err);
				});
			}
		});
	}
}

/*----------------------------------------------------------
Reducer
----------------------------------------------------------*/

function createInitialState() {
	return mori.toClj({
		isLoaded : false,
		location: {
			lat: null,
			long: null
		}
	});
}

export const reducer = createReducer([SET_LOADING, SET_LOADED, SET_LOCATION], function(state, action) {
	switch (action.type) {
		case SET_LOADING:
			return mori.assoc(state, 'isLoaded', false);
			break;
		case SET_LOADED:
			return mori.assoc(state, 'isLoaded', true);
			break;
		case SET_LOCATION:
			return mori.assoc(state, 'location', mori.toClj(action.payload));
		default:
			return state;
	}
}, createInitialState);

/*----------------------------------------------------------
Selectors
----------------------------------------------------------*/

export const selectApp = createSelector(selectPath('APP'));

/*----------------------------------------------------------
Subscription & PropsMaps
----------------------------------------------------------*/

function getSubscription(store, props) {
	return store.subscribe(selectApp).map(state => mori.hashMap('app', state));
}

/*----------------------------------------------------------
App Component
----------------------------------------------------------*/

export const App = connect(getSubscription)(React.createClass({

	propTypes: {
		app: React.PropTypes.object,
		location: React.PropTypes.object
	},

	getInitialState() {
		return {
			menuOpen: false
		};
	},

	openMenu() {
		this.setState({ menuOpen: true });
	},

	closeMenu() {
		this.setState({ menuOpen: false });
	},

	render() {
		
		const app = this.props.app;
		
		let currentPath;

		if (this.props.location.pathname.indexOf('discover') >= 0) {
			currentPath = 'discover';
		} else if(this.props.location.pathname.indexOf('alerts') >= 0) {
			currentPath = 'alerts';
		} else if(this.props.location.pathname.indexOf('localfeed') >= 0) {
			currentPath = 'localfeed';
		} else {
			currentPath = 'discover';
		}

		return <div>
			{(() => {
				if (this.state.menuOpen) return<Menu closeMenu={this.closeMenu} />;
			})()}
			<Header currentPath={currentPath} openMenu={this.openMenu} />
			<div id="wrapper">
				{this.props.children && React.cloneElement(this.props.children, { app })}
			</div>
		</div>;
	}

}));
