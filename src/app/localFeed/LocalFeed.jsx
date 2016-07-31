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

	render() {

		let feed = this.props.feed || [];

		return <div className="localFeed">
			{feed.map((feedling, index) => {
				return <div key={index}>
					<p>{feedling.type}</p>
				</div>;
			})}
		</div>
	}

}));