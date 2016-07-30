var
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber');

function reportError(err) {
	console.log(err);
};

module.exports = function(gulp, config) {
	return function() {
		return gulp.src(['./src/css/**/*.scss'])
			.pipe(plumber({
				handleError: reportError
			}))
			.pipe(sass({
				includePaths: [],
				errorLogToConsole: true,
				outputStyle : config.sass.outputStyle
			})).on('error', sass.logError)
			.pipe(autoprefixer({
				browsers: ['> 1%', 'ie >= 8', 'Firefox >= 25', 'Firefox ESR', 'Opera 12.1']
			}))
			.pipe(gulp.dest(config.dest + 'css/'));
	};
};