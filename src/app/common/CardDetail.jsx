import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import { Route } from 'react-router';
import BeachDetail from 'app/common/BeachDetail';

/*----------------------------------------------------------
Component
----------------------------------------------------------*/

const style = {
	container: {
		overflow: 'hidden',
	}
}

export default React.createClass({

	propTypes: {
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
						<div className="carousel__content">
							alertDetail
						</div>
					</ReactSwipe>
				</div>
			</div>
		);
	}

});