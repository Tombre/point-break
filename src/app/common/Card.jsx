import React from 'react';

/*----------------------------------------------------------
Component
----------------------------------------------------------*/

export default React.createClass({
	propTypes: {
		alert: React.PropTypes.object
	},
	render() {
		let { alert } = this.props;
		return (
			<div className="card">
				<div className="card__bg">
				</div>
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

});
