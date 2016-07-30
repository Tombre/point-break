import React from 'react';
import mori from 'mori';
import Kefir from 'kefir';
import _ from 'lodash';

import connect from 'store/connect';
import { createReducer, selectPath, createSelector, selectWhere, selectWhen } from 'store/utils';
import { find, where, pluck } from 'helper/mori';
import { selectData, fetch, insert, setResponse } from 'store/data';
import { selectErrorWhen, removeError, createError } from 'store/error';

import Footer from 'app/common/Footer';


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

/*----------------------------------------------------------
Reducer
----------------------------------------------------------*/

function createInitialState() {
	return mori.toClj({
		isLoaded : false
	});
}

export const reducer = createReducer([SET_LOADING, SET_LOADED], function(state, action) {
	switch (action.type) {
		case SET_LOADING:
			return mori.assoc(state, 'isLoaded', false);
			break;
		case SET_LOADED:
			return mori.assoc(state, 'isLoaded', true);
			break;
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
	return store.subscribe(selectApp);
}

/*----------------------------------------------------------
App Component
----------------------------------------------------------*/

export const App = connect(getSubscription)(React.createClass({

	propTypes: {
		app: React.PropTypes.object,
	},

	render() {

		const app = this.props.app;
		
		let currentPath;

		if (this.props.location.pathname.indexOf('discover') >= 0) {
			currentPath = 'discover';
		} else if(this.props.location.pathname.indexOf('alerts') >= 0) {
			currentPath = 'alerts';
		} else {
			currentPath = 'discover';
		}

		return <div>
			<div id="wrapper">

				<Card />

				{this.props.children && React.cloneElement(this.props.children, { app })}
			</div>
			<Footer currentPath={currentPath} />
		</div>;
	}

}));
