var
	svgSprite = require('gulp-svg-sprite'),
	plumber = require('gulp-plumber');

var svgConfig = {
	mode: {
		inline: true,
		symbol: {
			bust: false
		}
	},
	shape: {
		transform: ['svgo']
	}
};

function reportError(err) {
	console.log(err);
};

module.exports = function(gulp, config) {
	return function(cb) {
		return gulp.src(['./src/img/icons/**/*.svg'])
			.pipe(plumber())
			.pipe(svgSprite(svgConfig))
			.on('error', reportError)
			.pipe(gulp.dest(config.dest + 'img/sprites'));
	}
}