module.exports = function(gulp, config) {
	return function(cb) {
		return gulp.src(['./src/img/**/*','!./src/img/**/icons/*.png', '!./src/img/**/icons/*.svg'])
			.pipe(gulp.dest(config.dest + 'img/'));
	}
}