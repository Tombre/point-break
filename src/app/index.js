import 'helper/setup';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router'

import { createStore, Provider } from 'store';

import { App as App, reducer as APP } from './app';

import NotFoundPage from './error/NotFoundPage.jsx';
import Create from 'app/create/Create';
import View from 'app/view/View';

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
						<IndexRoute component={Create}/>
						<Route path="Create" component={Create} />
						<Route path="View" component={View} />
					</Route>
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