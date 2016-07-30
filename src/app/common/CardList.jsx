import React from 'react';

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
				{this.props.alerts.map(alert => <Card alert={alert}>}
			</div>
		);
	}

});
