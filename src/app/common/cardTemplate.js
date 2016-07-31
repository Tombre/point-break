
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


				<div className="card__expand">
					<div className="card__expand-col">
						+11 other alerts
					</div>
				</div>
			</div>