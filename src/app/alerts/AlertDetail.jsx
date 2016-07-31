import React from 'react';
import mori from 'mori';
import { find, where, pluck } from 'helper/mori';
import { Link } from 'react-router';
import { Route } from 'react-router';
import { selectData } from 'store/data';
import connect from 'store/connect';
import Card from 'app/common/Card';

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
		return <div className="card-detail dialog">
				<div className="dialog__header">
					<div className="dialog__header--left">
						<Link to={"/alerts"} className="button__close">Close</Link>
					</div>
					<div className="dialog__header--title has-subheading">
						Trigg Beach
						<div className="dialog__header--subtitle">
						14 nearby alerts found
						</div>
					</div>
					<div className="dialog__header--right">
						<a href="#" className="button__add">Add Alert</a>
					</div>
				</div>
				<div className="dialog__body">

					<div className="map">
						<img src="/img/map.png" width="100%" />
					</div>

					<Card alert={alert} />

						<div className="card">
							<div className="card__content">

								<div className="card__head">

									<div className="card__difficulty">
										<div className="card__difficulty-tag card__difficulty-tag--expert">
											Expert
										</div>
									</div>

									<div className="card__info">
										<div className="card__thumbs">
											<div className="card__thumbs-icon">
												<img src="/img/thumb.png" width="14" height="14" />
											</div>
											<div className="card__thumbs-count">
												13
											</div>
										</div>
										<div className="card__alarms">
											<div className="card__alarms-icon">
												<img src="/img/alarm.png" width="14" height="14" />
											</div>

											<div className="card__alarms-count">
												2
											</div>
										</div>
									</div>

								</div>

								<div className="card__heading">
									In 3 Days
								</div>

								<div className="card__subheading">
									Expert Conditions
								</div>

								<div className="card__table">
									<div className="card__table-row">
										<div className="card__table-col--left">
											Swell
										</div>
										<div className="card__table-col--right">
											6 - 8ft
										</div>
									</div>
									<div className="card__table-row">
										<div className="card__table-col--left">
											Swell Direction
										</div>
										<div className="card__table-col--right">
											NNW
										</div>
									</div>
									<div className="card__table-row">
										<div className="card__table-col--left">
											Wind
										</div>
										<div className="card__table-col--right">
											NW 35km/h
										</div>
									</div>
									<div className="card__table-row">
										<div className="card__table-col--left">
											Tide
										</div>
										<div className="card__table-col--right">
											Low
										</div>
									</div>
								</div>

								<div className="card__body">
								</div>

						</div>
					</div>
				</div>
			</div>
	}

}));
