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
	return store.subscribe(selectData.location).map(alerts => {
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

	getInitialState() {
		return {
			loaded: false
		};
	},

	componentDidMount() {
		let setLoaded = () => this.setState({ loaded: true });
		this.props.loadDiscoverAlarms();
	},

	render() {

		// {(() => {
		// if (alerts.length) {
		// 	return <CardList alerts={alerts}/>
		// } else if (this.state.loaded === false) {
		// 	<p style={{ color: 'white' }}>Loading beaches....</p>
		// }
		// return <p style={{ color: 'white' }}>No beaches found</p>
		// })()}

		let alerts = this.props.alerts || [];
		return <div className="page--create">
			<CardList alerts={alerts}/>
		</div>
	}
}));