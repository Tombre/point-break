// var rimraf = require('rimraf');
var fs = require('fs-extra')

module.exports = function(gulp, config) {
	return function(cb) {
		fs.copy('./src/index.html', config.dest + 'index.html', cb); 
	}
}