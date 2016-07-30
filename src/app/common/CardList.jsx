import React from 'react';
import Card from 'app/common/Card';

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
				{this.props.alerts.map(alert => <Card alert={alert} />)}
			</div>
		);
	}

});
