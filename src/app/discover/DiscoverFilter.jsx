import React from 'react';

/*----------------------------------------------------------
Component
----------------------------------------------------------*/

export default React.createClass({

	getInitialState() {
		return {
			active: 'nearby'
		};
	},

	setActive(type) {
		this.setState({ active: type });
	},

	render() {
		return <div className="filter filter--discover">
			<div onClick={_.partial(this.setActive, 'nearby')} className={`filter__item ` + (this.state.active === 'nearby'  ? 'filter__item--active' : '')}>
				Nearby
			</div>
			<div onClick={_.partial(this.setActive, 'popular')} className={`filter__item ` + (this.state.active === 'popular'  ? 'filter__item--active' : '')}>
				Popular
			</div>
			<div onClick={_.partial(this.setActive, 'search')} className={`filter__item ` + (this.state.active === 'search'  ? 'filter__item--active' : '')}>
				Search
			</div>
		</div>
	}
});
