import React from 'react';
import TextInput from 'app/common/inputs/TextInput';
import SingleSelectList from 'app/common/inputs/SingleSelectList';

/*----------------------------------------------------------
Component
----------------------------------------------------------*/

export default React.createClass({
	propTypes: {
		distance: React.PropTypes.array
	},
	render() {
		return (
			<div className="form-input">
				<div className="form-input__row">
					<label>Skill</label>
					<SingleSelectList className="skill" options={['Beginner', 'Intermediate', 'Advanced']} default="Beginner" />
				</div>
			</div>
		);
	}

});