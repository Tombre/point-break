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
		let setLoaded = () => this.setState({ loaded: true });
		this.props.loadMyAlerts();
	},

	render() {
		let alerts = this.props.alerts || [{ title : 'Test' }];
		return <div className="page--view">
			<CardList alerts={alerts}/>
		</div>
	}

}));