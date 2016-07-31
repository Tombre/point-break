import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router';

/*----------------------------------------------------------
Component
----------------------------------------------------------*/

const style = {
	container: {
		overflow: 'hidden',
	}
}

export default React.createClass({

	propTypes: {
		alert: React.PropTypes.object
	},

	render() {
		let alert = this.props.alert;
		return (
			<div className="info-page dialog">
				<div className="dialog__header">
					<div className="dialog__header--left">
						<Link to={'/discover'} className="button__close">Close</Link>
					</div>
				</div>
				<div className="dialog__body">
					<div className="info-page__header">
						<img src="/img/logo-large.png" width="162" height="103" />
					</div>
					<div className="info-page__body">
						<p>Crowdsourcing beach intelligence to encourage participation of recreational activities and utilisation of our coastal areas with real time spatial awareness.</p>
						<h3>Our aims:</h3>
						<ul>
							<li>Tackle beach safety with a solution that fits into peoples current habits (not just a shark spotting app).</li>
							<li>Encourage activity and engagement around beaches and beach communities.</li>
							<li>Drives collaboration and sharing of local knowledge.</li>
							<li>Feed useful data back into industry/government.</li>
						</ul>
						<h3>Problem Statement</h3>
						<p>Current surf/weather apps provide valuable information about weather and the surf conditions of Australian beaches. However:</p>
						<ul>
							<li>They do not enable discovery beaches</li>
							<li>They are often aimed specifically at surfers - ignoring the simple beach goer</li>
							<li>They do not have information about beach safety </li>
							<li>Conditions can be difficult to interoperate for beginners</li>
							<li>Provide a means for community feedback</li>
						</ul>
						<p>Addressing community beach safety is an especially prevalent problem, given the recent shark attacks in WA resulting in conflict between government, surfers and the general public.</p>
						<h3>Solution</h3>
						<p>PointBreak is an app that aims to provide beach goes with a easily consumable way of discovering beaches, understanding surf conditions, collaborating your community all while and keeping you safe.</p>
						<p>The app allows you to setup surf alerts that monitor current beach and weather conditions - then notify you when its the best time to go to the beach! Alerts that users set up get added to a public list which which they can use to discover new spots and learn what conditions are best for their favourite activities. Users also have to ability to submit events and information about the current conditions so the community can get notified with real and up to date observations.</p>
						<p>PointBreak also intelligently keeps track of shark alerts and dangerous weather in the background, both from government data sources, and user curated content, so app can let you know if it might be best to keep out of the water.</p>
					</div>
				</div>
			</div>
		);
	}

});