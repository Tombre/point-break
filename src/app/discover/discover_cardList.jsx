import React from 'react';
import Card from 'app/discover/discover_card';

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
				<div className="card" onClick={this.handleCardClick}>
					<div className="card__pre">
						<div className="card__pre-left">
							Trigg Beach, WA
						</div>
						<div className="card__pre-right">
							Less than 1km away
						</div>
					</div>
					<div className="card__content">

						<div className="card__head">

							<div className="card__difficulty">
								<div className="card__difficulty-tag card__difficulty-tag--expert">
									Expert
								</div>
							</div>

							<div className="card__info">
								<div className="card__thumbs">
									<div className="card__thumbs-icon">
										<img src="/img/thumb.png" width="14" height="14" />
									</div>
									<div className="card__thumbs-count">
										13
									</div>
								</div>
								<div className="card__alarms">
									<div className="card__alarms-icon">
										<img src="/img/alarm.png" width="14" height="14" />
									</div>

									<div className="card__alarms-count">
										2
									</div>
								</div>
							</div>

						</div>

						<div className="card__heading">
							In 3 Days
						</div>

						<div className="card__subheading">
							Expert Conditions
						</div>

						<div className="card__table">
							<div className="card__table-row">
								<div className="card__table-col--left">
									Swell
								</div>
								<div className="card__table-col--right">
									6 - 8ft
								</div>
							</div>
							<div className="card__table-row">
								<div className="card__table-col--left">
									Swell Direction
								</div>
								<div className="card__table-col--right">
									NNW
								</div>
							</div>
							<div className="card__table-row">
								<div className="card__table-col--left">
									Wind
								</div>
								<div className="card__table-col--right">
									NW 35km/h
								</div>
							</div>
							<div className="card__table-row">
								<div className="card__table-col--left">
									Tide
								</div>
								<div className="card__table-col--right">
									Low
								</div>
							</div>
						</div>

						<div className="card__body">
						</div>

				</div>
				<div className="card__expand">
					<div className="card__expand-col">
						+11 other alerts
					</div>
				</div>
				</div>

				<div className="card" onClick={this.handleCardClick}>
					<div className="card__pre">
						<div className="card__pre-left">
							SCARBOROUGH BEACH, WA
						</div>
						<div className="card__pre-right">
							Less than 2km away
						</div>
					</div>
					<div className="card__content">

						<div className="card__head">

							<div className="card__difficulty">
								<div className="card__difficulty-tag card__difficulty-tag--beginner">
									Beginner
								</div>
							</div>

							<div className="card__info">
								<div className="card__thumbs">
									<div className="card__thumbs-icon">
										<img src="/img/thumb.png" width="14" height="14" />
									</div>
									<div className="card__thumbs-count">
										18
									</div>
								</div>
								<div className="card__alarms">
									<div className="card__alarms-icon">
										<img src="/img/alarm.png" width="14" height="14" />
									</div>

									<div className="card__alarms-count">
										16
									</div>
								</div>
							</div>

						</div>

						<div className="card__heading">
							In 5 Days
						</div>

						<div className="card__subheading">
							Beginner Conditions
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
									NW 35km/h
								</div>
							</div>
							<div className="card__table-row">
								<div className="card__table-col--left">
									Tide
								</div>
								<div className="card__table-col--right">
									High
								</div>
							</div>
						</div>

						<div className="card__body">
						</div>

				</div>
				</div>


				{this.props.alerts.map((alert, index) => <Card key={index} alert={alert} />)}
			</div>
		);
	}

});
