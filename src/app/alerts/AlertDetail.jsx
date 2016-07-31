import React from 'react';
import mori from 'mori';
import { find, where, pluck } from 'helper/mori';
import { Route } from 'react-router';
import { selectData } from 'store/data';
import connect from 'store/connect';
import CardDetail from 'app/common/CardDetail';

/*----------------------------------------------------------
Subscription
----------------------------------------------------------*/

function getSubscription(store, props) {
	return store.subscribe(state => {
		find(selectData.alarm({ id: props.params.id }, state))
	}).map(alerts => {
		return mori.hashMap('alert', mori.vals(alerts));
	});
}

/*----------------------------------------------------------
Component
----------------------------------------------------------*/

const style = {
	container: {
		overflow: 'hidden',
	}
}

export default connect()(React.createClass({

	propTypes: {
		params: React.PropTypes.object,
		alert: React.PropTypes.object
	},

	render() {
		return <CardDetail alert={this.props.alert} />
	}

}));