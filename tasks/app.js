
var
	webpack = require("webpack"),
	webpackCompiler = webpack(require('../webpack.config')),
	gutil = require('gulp-util'),
	fs = require('fs-extra');

module.exports = function(gulp, config) {
	return function (callback) {

		webpackCompiler.run(function(err, stats) {

			if (err) throw new gutil.PluginError("webpack", err);

			gutil.log("[webpack]", stats.toString({
		            colors : true,
		            assets: false,
		            chunks: false,
		            chunkModules : false
		        }));

			callback();
		});
	}
};

