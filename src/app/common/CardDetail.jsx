import React from 'react';
import mori from 'mori';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import { find, where, pluck } from 'helper/mori';
import { Route } from 'react-router';
import { selectData } from 'store/data';
import connect from 'store/connect';
import BeachDetail from 'app/common/BeachDetail';
import AlertDetail from 'app/common/AlertDetail';

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
		let alert = this.props.alert;
		return (
			<div className="card-detail dialog">
				<div className="dialog__header">
					<div className="dialog__header--left">
						<a href="#" className="button__close">Close</a>
					</div>
					<div className="dialog__header--title">
						{alert.beach}
					</div>
					<div className="dialog__header--right">
						<a href="#" className="button__add">Add Alert</a>
					</div>
				</div>
				<div className="dialog__body">
					<ReactSwipe
						className="carousel"
						swipeOptions={{continuous: false}}
						style={style}
					>
						<BeachDetail alert={alert} />
						<AlertDetail alert={alert} />
					</ReactSwipe>
				</div>
			</div>
		);
	}

}));