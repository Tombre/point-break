import 'helper/setup';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router'

import { createStore, Provider } from 'store';

import { App as App, reducer as APP } from './app';

import NotFoundPage from './error/NotFoundPage.jsx';

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
					<Route path="/" onEnter={this.loadSessionAndResources} component={App} />
					<Route path="*" component={NotFoundPage} />
				</Router>
			</Provider>
		);
	}
});

/*----------------------------------------------------------
Render
----------------------------------------------------------*/

// <IndexRoute component={AlertsPage}/>
// <Route path="alerts" component={AlertsPage}>
// <Route path="alerts/:alertid" component={AlertsDetail} />
// <Route path="discover" component={DiscoverPage} />
// <Route path="push" component={PushPage} />

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('app')
);