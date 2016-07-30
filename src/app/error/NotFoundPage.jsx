import React from 'react';
import ErrorPage from './ErrorPage';

/*----------------------------------------------------------
Component
----------------------------------------------------------*/

export default React.createClass({
	render: function() {
		return <ErrorPage detail="404 - Not Found" message="Sorry, we couldn't find the survey you were looking for." />
	}
});