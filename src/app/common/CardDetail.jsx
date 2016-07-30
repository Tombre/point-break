import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import { Route } from 'react-router';
import SwitchableContent from 'app/common/SwitchableContent';
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

const CardDetail = React.createClass({
	render() {
		const {page, alert, alertId} = this.props
		return (
			<div className="card-detail dialog">
				<div className="dialog__header">
					<div className="dialog__header--left">
						<a href="#" className="button__close">Close</a>
					</div>
					<div className="dialog__header--title">
						{alert}
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


export default () => <CardDetail page={page} alert={alert} alertId={alertId} />