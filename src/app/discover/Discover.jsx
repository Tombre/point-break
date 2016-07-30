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
		}
	]
};

export default React.createClass({

	getInitialState() {
		return test_data;
	},

	render() {
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
			<CardList alerts={this.state.alerts}/>
		</div>
	}
});
