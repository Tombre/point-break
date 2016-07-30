import React from 'react';
import CardList from 'app/common/CardList';

const test_data = {
	alerts: [
		{
			name: 'LOWER TRESTLES',
			beach: 'TRIGG BEACH, WA'
		},
		{
			name: 'EASY SURFING',
			beach: 'COTTESLOE, WA'
		},
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

export default React.createClass({

	getInitialState() {
		return test_data;
	},

	render() {
		return <div className="page--create">
			<CardList alerts={this.state.alerts}/>
		</div>
	}
});