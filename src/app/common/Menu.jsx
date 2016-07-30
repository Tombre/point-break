import React from 'react';
import _ from 'lodash';
import { withRouter } from 'react-router';

export default withRouter(React.createClass({

	propTypes: {
		closeMenu: React.PropTypes.func,
		router: React.PropTypes.object
	},

	handleCloseClick(e) {
		e.preventDefault();
		this.props.closeMenu();
	},

	handleMenuClick(type, e) {
		e.preventDefault();
		if (type === 'report') {
			this.props.router.push(`/report/new/`);
		} else if (type === 'alert') {
			this.props.router.push(`/alerts/new/`);
		}
		this.props.closeMenu();
	},

	render() {
		return <div className="main-menu">
			<a href="#" className="main-menu__close" onClick={this.handleCloseClick}>X</a>
			<ul className="main-menu__list">
				<li className="main-menu__list__item">
					<a href="#" onClick={_.partial(this.handleMenuClick, 'report')} className="menu-link" >
						<div className="menu-link__img--newReport"></div>
						<span className="menu-link__name">New Report</span>
					</a>
				</li>
				<li className="main-menu__list__item">
					<a href="#" onClick={_.partial(this.handleMenuClick, 'alert')} className="menu-link">
						<div className="menu-link__img--newAlert"></div>	
						<span className="menu-link__name">New Alert</span>
					</a>
				</li>
			</ul>
		</div>
	}

}));