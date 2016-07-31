import React from 'react';
import { loadMyFeed } from 'app/localFeed/feed_store';
import CardList from 'app/common/CardList';
import connect from 'store/connect';
import mori from 'mori';
import { selectData } from 'store/data';

/*----------------------------------------------------------
Subscription & PropsMaps
----------------------------------------------------------*/

function getSubscription(store, props) {
	return store.subscribe(selectData.feed).map(feed => {
		return mori.hashMap('feed', mori.vals(feed));
	});
}


/*----------------------------------------------------------
Components
----------------------------------------------------------*/

export default connect(getSubscription, { loadMyFeed })(React.createClass({

	propTypes: {
		loadMyFeed: React.PropTypes.func,
		feed: React.PropTypes.array
	},

	componentDidMount() {
		this.props.loadMyFeed();
	},

	renderCard(feed, index) {
		return <div className="card" key={index}>
			<div className="card__content">
					<div className="card__difficulty">
							<div className="card__difficulty-tag card__difficulty-tag--warning">
								Warning
							</div>
						</div>

					<div className="card__heading">
						{feed.type}
					</div>

					<div className="card__subheading">
						{feed.provider}
					</div>
			</div>
		</div>
	},

	render() {

		let feed = this.props.feed || [];

		console.log(feed);

		return <div className="localFeed">
			<div className="card-list">
				{feed.map((feedling, index) => this.renderCard(feedling, index))}
			</div>
		</div>
	}

}));