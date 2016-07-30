import React from 'react';
import mori from 'mori';
import connect from 'store/connect';
import { loadDiscoverAlarms } from 'app/discover/discover_store';
import { selectData } from 'store/data';
import CardList from 'app/common/CardList';

/*----------------------------------------------------------
Config
----------------------------------------------------------*/

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

export default connect(getSubscription, { loadDiscoverAlarms })(React.createClass({

	propTypes: {
		loadDiscoverAlarms: React.PropTypes.func,
		alerts: React.PropTypes.array
	},

	componentDidMount() {
		this.props.loadDiscoverAlarms();
	},

	render() {

		let alerts = this.props.alerts || [];

		return <div className="page--create">
			<div className="filter filter--discover">
				<div className="filter__item filter__item--active">
					Nearby
				</div>
				<div className="filter__item">
					Popular
				</div>
				<div className="filter__item">
					Search
				</div>
			</div>
			<CardList alerts={alerts}/>
		</div>
	}
}));
