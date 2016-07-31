import 'helper/setup';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router'

import { createStore, Provider } from 'store';

import { App as App, reducer as APP } from './app';

import NotFoundPage from './error/NotFoundPage.jsx';
import Alerts from 'app/alerts/Alerts';
import AlertDetail from 'app/alerts/AlertDetail';
import Discover from 'app/discover/Discover';
import NewAlert from 'app/newAlert/NewAlert';
import LocalFeed from 'app/localFeed/LocalFeed';

import Info from 'app/info/Info';

import cookies from 'js-cookie';
import request from 'superagent';

// const cookie = cookies.get('pointbreak_auth');

// if (!cookie) {
// 	window.location = 'http://52.62.76.183:4001/auth/github';
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

		return callback();

		request
			.get('http://52.62.76.183:4001/auth/hack/')
			.end((error, response) => {
				if (error) return callback();
				let {pointbreak_auth} = JSON.parse(response.text);
				cookies.set('pointbreak_auth', pointbreak_auth);
				callback();
			});
		
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
						<Route path="localfeed" component={LocalFeed} />
					</Route>
					<Route path="alerts/new" component={NewAlert} />
					<Route path="alerts/:id" component={AlertDetail} />
					<Route path="info" component={Info} />
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