import 'helper/setup';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router'

import { createStore, Provider } from 'store';

import { App as App, reducer as APP } from './app';

import NotFoundPage from './error/NotFoundPage.jsx';
import Alerts from 'app/alerts/Alerts';
import Discover from 'app/discover/Discover';
import NewAlert from 'app/newAlert/NewAlert';

import cookies from 'js-cookie';

// const cookie = cookies.get('pointbreak_auth');

// if (!cookie) {
// 	window.location = 'http://192.168.2.110:4001/auth/github';
// }

/*----------------------------------------------------------
Store
----------------------------------------------------------*/

const store = createStore({ APP });
window.store = store;

/*----------------------------------------------------------
Root Component
----------------------------------------------------------*/

const Root = React.createClass({

	propTypes: {
		store : React.PropTypes.object
	},

	loadSessionAndResources: function(nextState, replace, callback) {
		let { dispatch, getState } = this.props.store;
		callback();
	},

	render: function() {
		const { store } = this.props;
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					<Route path="/" onEnter={this.loadSessionAndResources} component={App}>
						<IndexRoute component={Discover}/>
						<Route path="discover" component={Discover} />
						<Route path="alerts" component={Alerts} />
					</Route>
					<Route path="alerts/new" component={NewAlert} />
					<Route path="*" component={NotFoundPage} />
				</Router>
			</Provider>
		);
	}
});

/*----------------------------------------------------------
Render
----------------------------------------------------------*/

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('app')
);