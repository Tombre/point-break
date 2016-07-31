import React from 'react';
import mori from 'mori';
import connect from 'store/connect';
import { loadDiscoverAlarms } from 'app/discover/discover_store';
import { selectData } from 'store/data';
import CardList from 'app/discover/discover_cardList';
import DiscoverFilter from 'app/discover/DiscoverFilter';

/*----------------------------------------------------------
Config
----------------------------------------------------------*/


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

		let alerts = this.props.alerts || [];

		return <div className="page--create">
			<DiscoverFilter />
			<CardList alerts={alerts} />
		</div>
	}
}));
