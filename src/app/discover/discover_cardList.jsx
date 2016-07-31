import React from 'react';
import Card from 'app/discover/discover_card';

/*----------------------------------------------------------
Component
----------------------------------------------------------*/

export default React.createClass({
	propTypes: {
		alerts: React.PropTypes.array
	},
	render() {
		return (
			<div className="card-list">
				<div className="card" onClick={this.handleCardClick}>
					<div className="card__pre">
						<div className="card__pre-left">
							Trigg Beach, WA
						</div>
						<div className="card__pre-right">
							Less than 1km away
						</div>
					</div>
				</div>
				{this.props.alerts.map((alert, index) => <Card key={index} alert={alert} />)}
			</div>
		);
	}

});
