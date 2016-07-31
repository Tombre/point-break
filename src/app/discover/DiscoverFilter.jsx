import React from 'react';

/*----------------------------------------------------------
Component
----------------------------------------------------------*/

export default React.createClass({
	render() {
		return <div className="filter filter--discover">
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
	}
});
