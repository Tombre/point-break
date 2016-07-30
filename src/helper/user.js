import _ from 'lodash';
import Kefir from 'kefir';
import mori from 'mori';

/*----------------------------------------------------------
	Permissions
----------------------------------------------------------*/

export const isAnonymous = function(user) {
	return mori.get(user, 'username') === "";
};

export const isAdmin = function(user) {
	if ( mori.get(user, 'roles') && (mori.get(user, 'roles').indexOf("Admin") != -1 || mori.get(user, 'roles').indexOf("Superuser") != -1)) {
		return true;
	}
	return false;
};

export const hasPermission = function(user, permissions) {
	var roles = mori.get(user, "roles");
	if (_.isUndefined(roles)) {
		return false;
	}
	for (var i = permissions.length - 1; i >= 0; i--) {
		if (roles.indexOf(permissions[i]) >= 0) {
			return true;
		}
	}
	return false;
}

/*----------------------------------------------------------
	Computed Values
----------------------------------------------------------*/

export const getFullName = function(user) {
	var names = mori.get(user, 'names');
	if (names && names.length && names[0].length) {
		return names.join(' ');
	}
	return mori.get(user, 'email');
};

const avatarColours = ['#E7965C', '#E3744E', '#E7B760', '#94BA69', '#69A6BA', '#867DC5', '#C57D9E'];

// gets an avatar colour off its this users email
export const getAvatarColour = function(user, index) {
	var hash = _.hashCode(mori.get(user, 'email'));
	return (index ? avatarColours[index] : avatarColours[hash % avatarColours.length]);
};

// returns the short - (2 letter max) avatar ID of the user. This will use the name array by default but if that is not available, it will use the email address
export const getAvatarID = function(user) {
	var avatarID, names = mori.get(user, 'names'), email = mori.get(user, 'email');
	avatarID = (!_.isArray(names) || names.length === 0 || names[0].length === 0) ? [email] : names;
	avatarID = _.reduce(avatarID, function(memo, value) {
		return memo + value.slice(0, 1);
	}, '');
	return avatarID;
},