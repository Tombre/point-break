import React from 'react';
import { withRouter } from 'react-router';

/*----------------------------------------------------------
Component
----------------------------------------------------------*/

export default withRouter(React.createClass({
	
	propTypes: {
		router: React.PropTypes.object,
		alert: React.PropTypes.object
	},

	handleCardClick() {
		// console.log(this..alert);
		this.props.router.push(`/alerts/${this.props.alert.id}/`);
	},

	render() {
		let { alert } = this.props;
		return (
			<div className="card" onClick={this.handleCardClick}>
				
				<div className="card__bg"></div>
				<div className="card__content">

					<div className="card__head">
						<div className="card__heading card__heading--center">
							{alert.title}
						</div>
					</div>

					<div className="card__body">
						<div className="card__body-col">
							<div className="card__body-heading">
								8 - 12ft
							</div>
							<div className="card__body-subheading">
								Swell
							</div>
						</div>
						<div className="card__body-col">
							<div className="card__body-heading">
								NNW
							</div>
							<div className="card__body-subheading">
								Wind
							</div>
						</div>
						<div className="card__body-col">
							<div className="card__body-heading">
								13km
							</div>
							<div className="card__body-subheading">
								Wind Speed
							</div>
						</div>
					</div>

					<div className="card__footer">
						<div className="card__footer-col card__footer-col--left">
							Surfing
						</div>
						<div className="card__footer-col card__footer-col--right">
							Swimming
						</div>
					</div>

				</div>
			</div>
		);
	}

}));
