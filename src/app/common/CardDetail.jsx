import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import { Route } from 'react-router';
import BeachDetail from 'app/common/BeachDetail';
import AlertDetail from 'app/common/AlertDetail';

/*----------------------------------------------------------
Component
----------------------------------------------------------*/

const page = 1;

const alertId = 'dsfasdf';
const test_data = {
	alerts: [
		{
			name: 'LOWER TRESTLES',
			beach: 'TRIGG BEACH, WA'
		},
		{
			name: 'EASY SURFING',
			beach: 'COTTESLOE, WA'
		}
	]
};

const alert = test_data.alerts[alertId];

const style = {
	container: {
		overflow: 'hidden',
	}
}

export default React.createClass({

	propTypes: {
		params: React.PropTypes.object
	},

	render() {
		
		let alert = test_data.alerts[this.props.params.id];

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

});