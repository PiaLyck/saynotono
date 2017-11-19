var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');
var config  = require('../config');
var utility = require('../utility');


/**
 * Images - copy from source to build directory and compress.
 */
gulp.task('fonts', function() {
	return gulp.src(config.fonts.input)
		.pipe(plumber({ errorHandler: utility.errorHandler }))
		.pipe(gulp.dest(config.fonts.output))
		.pipe(notify({
			title: 'Fonts',
			message: '✔ fonts copied successfully.',
			onLast: true
		}));
});