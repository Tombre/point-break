var rimraf = require('rimraf');
var _= require('lodash');

module.exports = function(gulp, config) {
	return function(callback) {

		var toRemove = ['./build'];
		callback = _.after(toRemove.length, callback);

		for (var i = toRemove.length - 1; i >= 0; i--) {
			rimraf(toRemove[i], callback);
		}
	};
};