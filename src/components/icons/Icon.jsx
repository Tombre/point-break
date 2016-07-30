// component
import React from 'react';
import request from 'superagent';

/*----------------------------------------------------------
Setup
----------------------------------------------------------*/

// get the spritesheet via ajax (this will hopefully be cached)
const spriteSheetRequest = new Promise((resolve, reject) => {
	request.get('/img/survey/sprites/symbol/svg/sprite.symbol.svg').end(function(error, response){

			if (!_.isNull(error)) {
				return reject(error);
			};
			
			let wrapper = document.createElement('div');
			wrapper.className = 'svg-spritesheet hidden';
			wrapper.innerHTML = response.text;
			document.body.insertBefore(wrapper, document.body.childNodes[0]);

			return resolve(response);

		});
});	

export default React.createClass({

	propTypes: {
		icon: React.PropTypes.string,
		className: React.PropTypes.string,
		width: React.PropTypes.number,
		height: React.PropTypes.number
	},

	getInitialState() {
		return {
			svgLoaded: false,
		};
	},

	componentDidMount() {
		spriteSheetRequest.then(() => {
			this.setState({ svgLoaded: true });
		});
	},

	render() {
		if (!this.state.svgLoaded) {
			return <div>{this.props.children}</div>;
		}

		let icon = `#${this.props.icon}`;

		return <svg className={`icon-svg ${(this.props.className) || ''}`}>
			<use xlinkHref={icon} />
		</svg>;
		
	}

});

