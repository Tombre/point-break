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
		// this.props.router.push(`/alerts/${this.props.alert.id}/`);
	},

	getWindSpeed(range) {
		if (!range) return 'None';
		let avg = (range[0] * range[1]) /2;
		return `${avg}km/h`;
	},

	getTide(range) {
		if (!range) return 'Low';
		let avg = (range[0] * range[1]) /2;
		if (avg > 2.5) {
			return 'High';
		}
		return 'Low';
	},

	render() {
		let { alert } = this.props;
		alert = alert || {};
		
		console.log(alert);

		return (

			<div className="card" onClick={this.handleCardClick}>

				<div className="card__content">

					<div className="card__head">

						<div className="card__difficulty">
							<div className="card__difficulty-tag">
								Beginner
							</div>
						</div>

						<div className="card__info">
							<div className="card__thumbs">
								<div className="card__thumbs-icon">
									<img src="/img/thumb.png" width="14" height="14" />
								</div>
								<div className="card__thumbs-count">
									{Math.floor(Math.random() * 10)}
								</div>
							</div>
							<div className="card__alarms">
								<div className="card__alarms-icon">
									<img src="/img/alarm.png" width="14" height="14" />
								</div>

								<div className="card__alarms-count">
									{Math.floor(Math.random() * 10)}
								</div>
							</div>
						</div>

					</div>

					<div className="card__heading">
						{alert.title}
					</div>

					<div className="card__subheading">
						{alert.description}
					</div>

					<div className="card__table">
						<div className="card__table-row">
							<div className="card__table-col--left">
								Swell
							</div>
							<div className="card__table-col--right">
								3 - 6ft
							</div>
						</div>
						<div className="card__table-row">
							<div className="card__table-col--left">
								Swell Direction
							</div>
							<div className="card__table-col--right">
								SSW
							</div>
						</div>
						<div className="card__table-row">
							<div className="card__table-col--left">
								Wind
							</div>
							<div className="card__table-col--right">
								{this.getWindSpeed(alert.wind_speed)} NNW
							</div>
						</div>
						<div className="card__table-row">
							<div className="card__table-col--left">
								Tide
							</div>
							<div className="card__table-col--right">
								{this.getTide(alert.tide)}
							</div>
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
								{this.getWindSpeed(alert.wind_speed)}
							</div>
							<div className="card__body-subheading">
								Wind Speed
							</div>
						</div>
					</div>


					<div className="card__alarm">
						<div className="card__alarm-col">
							<img src="/img/alarm-white.png" width="14" height="14" /> &nbsp; Alarm, weekends
						</div>
						<div className="card__alarm-col">
							<img src="/img/settings.png" width="14" height="14" />
						</div>
					</div>
				</div>
			</div>
		);
	}

}));

// <div className="card__footer">
// 	<div className="card__footer-col card__footer-col--left">
// 		Surfing
// 	</div>
// 	<div className="card__footer-col card__footer-col--right">
// 		Swimming
// 	</div>
// </div>
