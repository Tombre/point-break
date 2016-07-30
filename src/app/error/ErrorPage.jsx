import React from 'react';

/*----------------------------------------------------------
Component
----------------------------------------------------------*/

export default React.createClass({

	propTypes: {
		message: React.PropTypes.string,
		detail: React.PropTypes.string
	},

	renderFormatedError: function() {
		if (!this.props.detail) return;
		return <div>
			<p className="text-center"><strong>Detail:</strong> <i>{this.props.detail}</i></p>
		</div>
	},

	render: function() {
		return <div className="container">
			<div className="padding-top-lg">
				{(this.props.children ? this.props.children : <h1 className="heading--general" id='error_message'>{this.props.message}</h1> )}
				{this.renderFormatedError()}
			</div>
		</div>;
	}

});