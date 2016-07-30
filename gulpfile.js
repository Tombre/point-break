var
	gulp = require('gulp'),
	argv = require('yargs').argv, // get arguments from cli
	runSequence = require('run-sequence'),
	_ = require('lodash')

/*---------------------------------------------------------
Config
---------------------------------------------------------*/

// get the correct config
var getConfig = function(env) {
	var conf =  (env === 'production') ?  './tasks/config/production' : './tasks/config/development';
	return _.assign({}, require('./tasks/config/config'), require(conf));
};

var config = getConfig(process.env.NODE_ENV);

/*---------------------------------------------------------
Helper
---------------------------------------------------------*/

var getTask = function(task) {
	return require('./tasks/' + task)(gulp, config);
};

/*---------------------------------------------------------
Tasks
---------------------------------------------------------*/

// Functional Tasks

gulp.task('clean', getTask('clean'));
gulp.task('app', getTask('app'));
gulp.task('styles', getTask('styles'));
gulp.task('renderStatic', getTask('renderStatic'));
gulp.task('images', getTask('images'));
gulp.task('svgSprites', getTask('svgSprites'));

// Build Tasks

gulp.task('build', function(callback) {
	runSequence('clean', ['svgSprites', 'images', 'styles', 'renderStatic', 'app'], callback);
});

gulp.task('serve', ['build'], function () {
	gulp.watch('./src/index.html', { interval: 500 }, ['renderStatic']);
	gulp.watch(['./src/css/**/*.scss'], { interval: 500 }, ['styles']);
	gulp.watch(['./src/img/**/*'], { interval: 500 }, ['images']);
	gulp.watch(['./src/img/icons/**/*.svg'], { interval: 500 }, ['svgSprites']);
});

gulp.task('dev', ['serve']);

// Default

gulp.task('default', ['serve']);
