import React from 'react';
import { loadMyAlerts } from 'app/alerts/alerts_store';
import CardList from 'app/common/CardList';
import connect from 'store/connect';
import mori from 'mori';
import { selectData } from 'store/data';

/*----------------------------------------------------------
Subscription & PropsMaps
----------------------------------------------------------*/

function getSubscription(store, props) {
	return store.subscribe(selectData.alarm).map(alerts => {
		return mori.hashMap('alerts', mori.vals(alerts));
	});
}

/*----------------------------------------------------------
Component
----------------------------------------------------------*/

export default connect(getSubscription, { loadMyAlerts })(React.createClass({

	propTypes: {
		loadMyAlerts: React.PropTypes.func,
		alerts: React.PropTypes.array
	},

	componentDidMount() {
		this.props.loadMyAlerts();
	},

	render() {
		
		let alerts = this.props.alerts || [];
		alerts.reverse(); 

		return <div className="page--view">
			<div className="card-alert">
				<div className="card-alert__content">

					<div className="card-alert__head">
						<div className="card-alert__heading card-alert__heading--center">
							Warning
						</div>
					</div>

					<div className="card-alert__body">
						<div className="card-alert__body-icon">
							I
						</div>
						<div className="card-alert__body-col">
							<div className="card-alert__body-heading">
								NNW
							</div>
							<div className="card-alert__body-subheading">
								Wind
							</div>
						</div>
					</div>

				</div>
			</div>

			<CardList alerts={alerts}/>
		</div>
	}

}));
