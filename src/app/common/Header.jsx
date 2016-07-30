import React from 'react';
import { Link } from 'react-router';
import Icon from 'components/icons/Icon';

import Nav from 'app/common/Nav';

export default React.createClass({
	
	propTypes: {
		currentPath: React.PropTypes.string
	},

	render() {

		let { currentPath } = this.props;

		return <div className="header">
			<div className="header__topzone">
				<a href="#" className="header__info"></a>
				<div className="header__logo">
					<img src="/img/logo.png" width="146" height="33" />
				</div>
				<Link to={`/alerts/new`} className="header__add"></Link>
			</div>
			<Nav currentPath={currentPath} />
		</div>
	}

});