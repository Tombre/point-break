import React from 'react';
import { Link } from 'react-router';

const Component = React.createClass({
	
	propTypes: {
		currentPath: React.PropTypes.string
	},

	render() {

		let { currentPath } = this.props;

		return <div className="footer">
			<ul className="footer__nav-list">
				<li className={`footer__nav-list__item ` + (currentPath === 'discover' ? `footer__nav-list__item--active` : '')}><Link to={`/discover/`}>Discover</Link></li>
				<li className={`footer__nav-list__item ` + (currentPath === 'alerts' ? `footer__nav-list__item--active`: '')}><Link to={`/alerts/`}>My Alerts</Link></li>
			</ul>
		</div>
	}

});

export default Component;