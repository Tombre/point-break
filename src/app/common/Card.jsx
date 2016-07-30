import React from 'react';

/*----------------------------------------------------------
Component
----------------------------------------------------------*/

export default React.createClass({
	propTypes: {
		alert: React.PropTypes.array
	},
	render() {
		return (
			<div className="card">
				<div className="card__bg">
					{alert}
				</div>
				<div className="card__content">
					<div className="card__head">
						<div className="card__heading">
							LOWER TRESTLES
						</div>
						<div className="card__subheading">
							TRIGG BEACH, WA
						</div>
					</div>
				</div>
			</div>
		);
	}

});
